const axios = require('axios');

export const gettransaction = () => async dispatch => {
    try { //(id) => 

        const res = await axios.get(`http://localhost:5000/`);
        // const transactions = document.getElementById('transactions');
        // const id = document.getElementById('ID').value;
        // console.log(res.data)

        // res.data.forEach(element => {

        //     if (element.ID == id){
                
        //         const div = document.createElement('div');

        //         if (element.status === 'success'){
        //             div.innerHTML = 
        //             `<h3 class="text-success mt-4 mb-4">Success!</h3> 
        //             <h6>Your payment was completed ${element.duration} ago</h6> 
        //             <p> Name: ${element.name} </p>
        //             <p> Amount: ${element.amount} </p>
        //             <p> Payee: ${element.payee} </p>`
        //         } else if (element.status === 'pending'){
        //             div.innerHTML = 
        //             `<h3 class="text-warning mt-4 mb-4">Pending</h3> 
        //             <h6>Your payment is still being processed</h6> 
        //             <p> Name: ${element.name} </p>
        //             <p> Amount: ${element.amount} </p>
        //             <p> Payee: ${element.payee} </p>
        //             <p> <b>Estimated completion: ${element.duration} </b></p>`
        //         } else if (element.status === 'cancelled'){
        //             div.innerHTML = 
        //             `<h3 class="text-danger mt-4 mb-4">Cancelled</h3> 
        //             <h6>Your payment was cancelled due to <b>${element.cause}</b></h6> 
        //             <p> Name: ${element.name} </p>
        //             <p> Amount: ${element.amount} </p>
        //             <p> Payee: ${element.payee} </p>
        //             <p> <b> If you have any issues with this, please contact us at email@gmail.com or +1 (123) 456-7890 </b> </p>`
        //         }

        //         transactions.appendChild(div);

        //     }
        // });
        console.log(res.data)
        dispatch({
            type: "transaction",
            data: res.data
        });
        
    } catch (error) {
        console.error(error.message);
    }
}