import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../Styles.css';

const Items = (props) => {

    const deletedStyle = {
        color: '#363535',
        textDecoration: 'line-through'
    }

    return (
        <ListGroup className="mx-auto mt-5">
            {props.items.map((item) =>
            <ListGroupItem className="border-secondary" style={item.selected ? deletedStyle : null } key={item.itemId}>{item.itemName}
            {item.itemQuantity && item.itemQuantity.trim().length > 0 ? ' - ' + item.itemQuantity : null}
                <span className="float-right">
                    <button
                    className={item.selected ?  "btn btn-sm btn-outline-secondary align-top mx-2" : "btn btn-sm btn-outline-light align-top mx-2"}
                    onClick={() => props.click(item.itemId)}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </span>
            </ListGroupItem>
        )}
        </ListGroup>
    );
}

export default Items;