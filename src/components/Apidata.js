import React from 'react';
// import {connect} from "react-redux";

import { Link } from "react-router-dom";

function Apidata(props) {
    // const onClick = () => {
    //     props.history.go(-1)
    //     document.getElementById('id').style.filter = 'blur(10px)';
    //     document.getElementById('div').style.display = 'inherit';
    //     document.getElementById('div').style.width = '100px';
    // };
    return (
        <div className="container mt-4">
            <div id="id">
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

            <h1 className="font-weight-bold">Support</h1>

            <Link type="button" class="btn btn-outline-primary btn-lg mt-4" to="/transaction">Check your transaction status</Link> <br></br>
            <a type="button" class="btn btn-outline-dark btn-lg mt-4" src="">Check your KYC status</a>
            </div>
            

        </div>
    )
}

export default Apidata
