import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {v1 as uuid} from "uuid"; 


export default class ShoppingList extends Component {
    state = {
        items: [
            {
                id: uuid(),
                name: "Eggs"
            },
            {
                id: uuid(),
                name: "Milk"
            },
            {
                id: uuid(),
                name: "Meat"
            },
            {
                id: uuid(),
                name: "Water"
            }
        ]
    }
    
    render() {
        const {items} = this.state;

        return (
            <Container>
                <Button 
                color="success"
                style={{margineBottom: '2rem'}}
                onClick={()=>{
                    const name = prompt("Enter Item");
                    if(name) {
                        this.setState(state=> ({
                            items: [...state.items, {id: uuid(), name: name}]
                        }))
                    }
                }}
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="Shopping-list">
                        {items.map(({id,name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem >
                                   
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={()=> {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }))
                                    }}
                                    >&times;</Button>

                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

