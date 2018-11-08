import React, { Component } from 'react';
import Items from '../components/Items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEye, faEyeSlash, faSave } from '@fortawesome/free-solid-svg-icons';
import { Alert, Form, FormGroup, Input } from 'reactstrap';
import axios from '../axios-items';
import uuidv1 from 'uuid/v1';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemName: '',
            newItemQuantity: '',
            items: [],
            showItems: true,
            showAlert: false
        }
    }

    componentDidMount () {
        axios.get('/ShoppingList.json')
            .then(response => {
                if (response.data != null) {
                    this.setState({items: response.data});
                }
            })
            .catch(error => console.log(error));
        };

    nameChangeHandler = (event) => {
        this.setState({
            newItemName: event.target.value
        });
    }

    quantityChangeHandler = (event) => {
        this.setState({
            newItemQuantity: event.target.value
        });
    }

    addItemHandler = (event) => {
        event.preventDefault();
        if (this.state.newItemName && this.state.newItemName.trim().length > 0) {
            this.setState((prevState) => ({
                items: [...prevState.items, {itemName: prevState.newItemName, itemId: uuidv1(), selected: false, itemQuantity: prevState.newItemQuantity}],
                newItemName: '',
                newItemQuantity: ''
            }));
        }
    }

    toggleButtonHandler = (id) => {
        let clickedItem = this.state.items.find(item => item.itemId === id);
        const itemIndex = this.state.items.indexOf(clickedItem);
        clickedItem.selected = !clickedItem.selected;
        let newItems = this.state.items;
        newItems.splice(itemIndex, 1, clickedItem);
        this.setState({
            items: newItems
        });
    }

    deleteItemHandler = () => {
        const filteredItems = this.state.items.filter(item => !item.selected);
        this.setState({
            items: filteredItems
        });
    }

    showItemsHandler = () => {
        const doesShow = this.state.showItems;
        this.setState({ showItems: !doesShow });
    }

    onDismissHandler = () => {
        this.setState({ showAlert: false });
    }

    saveListHandler = () => {
        axios.put('/ShoppingList.json', this.state.items)
            .then(responce => console.log(responce))
            .catch(error => console.log(error));
        this.setState ({ showAlert: true });
    }

    render() {
        let shoppingItems = null;
        if (this.state.showItems) {
            shoppingItems = (
            <div>
                <Items
                    items={this.state.items}
                    click={this.toggleButtonHandler} />
            </div>
            );
        }

        const toggleOn = (<FontAwesomeIcon icon={faEye} title="Show items"/>);
        const toggleOff = (<FontAwesomeIcon icon={faEyeSlash} title="Hide items"/>);

        return (
            <div className="container ShoppingList mx-auto">
            {this.state.showAlert ?
                <Alert className="mx-auto text-center" color="success" isOpen={this.state.showAlert} toggle={this.onDismissHandler}>Your shopping list has been saved</Alert> : null}
                <Form inline onSubmit={this.addItemHandler}>
                    <FormGroup className="mx-auto">
                        <Input className="mr-2 my-2 border-secondary" type="text" value={this.state.newItemName} onChange={this.nameChangeHandler} placeholder="Enter item" required/>
                        <Input className="my-2 border-secondary" type="text" value={this.state.newItemQuantity} onChange={this.quantityChangeHandler} placeholder="Enter quantity"/>
                    </FormGroup>
                    <FormGroup className="mx-auto">
                        <button className="btn btn-md btn-outline-secondary align-top my-2" disabled={!this.state.newItemName} type="submit" title="Add item">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button className="btn btn-md btn-outline-secondary align-top ml-2 my-2" disabled={!this.state.items.some((e) => e.selected)} type="button" onClick={this.deleteItemHandler} title="Delete items">
                            <FontAwesomeIcon icon={faMinus}/></button>
                        <button className="btn btn-md btn-outline-secondary align-top ml-2 my-2" type="button" onClick={this.showItemsHandler}>
                            {this.state.showItems ? toggleOff : toggleOn }
                        </button>
                        <button className="btn btn-md btn-outline-secondary align-top ml-2 my-2" type="button" onClick={this.saveListHandler} title="Save list">
                            <FontAwesomeIcon icon={faSave}/>
                        </button>
                    </FormGroup>
                </Form>
                {shoppingItems}
            </div>
        );
    }
}

export default ShoppingList;