import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey =>{
    return (
    <li key={igkey}>
    <span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}
    </li>
    );
    });
    return(
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A nice burger with these ingredints:</p>
            <ul>
            {ingredientSummary}
            </ul> 
    <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout.</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );
}
export default orderSummary;