import React, { Component } from 'react';
import Items from './Items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, Input } from 'reactstrap';


class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                itemName: '',
                itemId: 1,
                selected: false 
            },
            items: [],
            showItems: true
        }        
    }

    inputChangeHandler = (event) => {
        this.setState({
            item: {
                ...this.state.item, 
                itemName: event.target.value
            }
        })
    }    
    
    addItemHandler = (event) => {
        event.preventDefault();
        if (this.state.item.itemName && this.state.item.itemName.trim().length > 0) {
            this.setState((prevState) => ({
                item: {
                    ...prevState.item, 
                    itemId: prevState.item.itemId + 1,
                    itemName: ''
                },
                items: [...prevState.items, prevState.item]
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
        })
    }   

    showItemsHandler = () => {
        const doesShow = this.state.showItems;
        this.setState({ showItems: !doesShow });
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

        const toggleOn = (<FontAwesomeIcon icon={faEye} title="Show items"/>)
        const toggleOff = (<FontAwesomeIcon icon={faEyeSlash} title="Hide items"/>)

        return (
            <div className="container Container float-sm-right">
                <Form inline  onSubmit={this.addItemHandler}>
                    <FormGroup className="mx-auto">
                        <Input className="mx-2 border-secondary" type="text" value={this.state.item.itemName} onChange={this.inputChangeHandler} placeholder="Enter item" required/>
                        <button className="btn btn-md btn-outline-secondary align-top mx-2" type="submit" title="Add item">
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button className="btn btn-md btn-outline-secondary align-top mx-2" type="button" onClick={this.deleteItemHandler} title="Delete item">
                            <FontAwesomeIcon icon={faMinus}/>
                        </button>
                        <button className="btn btn-md btn-outline-secondary align-top mx-2" type="button" onClick={this.showItemsHandler}>
                            {this.state.showItems ? toggleOff : toggleOn }
                        </button>                    
                    </FormGroup>                    
                </Form>
                {shoppingItems} 
            </div> 
        )
    }
}

export default ShoppingList;