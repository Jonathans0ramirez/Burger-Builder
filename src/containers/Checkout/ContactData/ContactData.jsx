import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email:'',
        address: {
            street: '',
            country: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Jonathan ramírez',
                address: {
                    street: 'Medellín',
                    country: 'Colombia'
                },
                email: 'jonathan@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false});
            });
    }

    render() {
        let content = (<form>
                <input type="text" name="name" placeholder="Your name"></input>
                <input type="email" name="email" placeholder="Your email"></input>
                <input type="text" name="street" placeholder="Street"></input>
                <input type="text" name="country" placeholder="Country"></input>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            content = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {content}
            </div>
        )
    }
}

export default ContactData;