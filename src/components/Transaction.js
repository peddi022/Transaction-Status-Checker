import React, { useState } from 'react'
import {connect} from "react-redux";
import { gettransaction } from "../actions/apiactions";

function Transaction(props) {
    const { transactions, gettransaction } = props;
    const back = () => {
        props.history.go(-1)
    };

    const [input, setInput] = useState()

    const onChange = (e) => {
        setInput(e.target.value)
        console.log("helloo")
    }

    // useEffect(() => {
    //     gettransaction(props.match.params.username);
    // }, []);

    return (
        <div className="container mt-4">
            <ul class="nav justify-content-center">
            <li class="nav-item m-2">
                    <a class="nav-link link-primary" href="#!">Paymatrix</a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link link-secondary" href="#!">Offers</a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link link-secondary" href="#!">Pricing</a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link btn btn-outline-secondary" href="#!">Log In</a>
                </li>
                <li class="nav-item m-2">
                    <a class="nav-link btn btn-outline-primary" href="#!">Sign Up</a>
                </li>
            </ul>
            
            <h1 className="font-weight-bold">Check your transaction status</h1>

            <form>
                <div class="form-group m-4">
                    <label for="formGroupExampleInput">Enter your 6-digit transaction ID</label>
                    <input type="text" class="form-control" placeholder="e.g. 293847" value={ input } onChange={ onChange }></input>
                </div>
  
            </form>
            <button onClick={gettransaction} className="btn btn-primary m-4">Check status</button>
            <button onClick={back} className="btn btn-warning">Go back</button>

            <div id="transactions">
                
                
                {transactions && transactions.map((transaction) => {
                    console.log(input)
                    if (transaction.ID === parseInt(input)){
                        if (transaction.status === 'success')
                        {return <div><h3 class="text-success mt-4 mb-4">Success!</h3> 
                                <h6>Your payment was completed {transaction.duration} ago</h6> 
                                <p> Name: {transaction.name} </p>
                                <p> Amount: {transaction.amount} </p>
                                <p> Payee: {transaction.payee} </p></div>}
                    
                        else if (transaction.status === 'pending'){
                                       return <div><h3 class="text-warning mt-4 mb-4">Pending</h3> 
                                       <h6>Your payment is still being processed</h6> 
                                       <p> Name: {transaction.name} </p>
                                       <p> Amount: {transaction.amount} </p>
                                       <p> Payee: {transaction.payee} </p>
                                       <p> <b>Estimated completion: {transaction.duration} </b></p> </div> }        
                            
                     else if (transaction.status === 'cancelled'){
                         
                        return    <div>
                                    <h3 class="text-danger mt-4 mb-4">Cancelled</h3> 
                                    <h6>Your payment was cancelled due to <b>{transaction.cause}</b></h6> 
                                    <p> Name: {transaction.name} </p>
                                    <p> Amount: {transaction.amount} </p>
                                    <p> Payee: {transaction.payee} </p>
                                    <p> <b> If you have any issues with this, please contact us at email@gmail.com or +1 (123) 456-7890 </b> </p> </div>
                                }
                    
                            }})}
            </div>


        </div>
               
    )
}


const mapStateToProps = (state) => ({
    transactions: state.transactions.transaction
})

export default connect(mapStateToProps, {gettransaction})(Transaction);

// export default Transaction;