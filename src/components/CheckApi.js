import React from 'react'
import axios from 'axios';
import {Button} from 'antd'

const CheckApi = () => {

const InitPayment = async () => {

const result = await axios.post("http://localhost:9091/paymentinterface/v1/initatePayment", {
"amount":"1.00",
"orderId":"Testp-232345678093",
"merchantReferenceId":"Test0134567891",
"customerPhoneNo":"9900308631",
"customerEmail":"dd1@dd.com"
}).then((response)=>console.log(response.data));
console.log(result)
};




  return (
    <div>
        <Button onClick={()=>{InitPayment()}}> 
            Check API
        </Button>
    </div>
  )
}

export default CheckApi