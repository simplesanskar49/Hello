import axios from 'axios';



const InitPayment = async () => {



const result = await axios.post("http://localhost:9091/paymentinterface/v1/initatePayment", {

"amount":"1.00",

"orderId":"Test-232345678093",

"merchantReferenceId":"Test0134567891",

"customerPhoneNo":"9900308631",

"customerEmail":"dd1@dd.com"

}).then((response)=>console.log(response));

//console.log(result)

};



export default InitPayment;