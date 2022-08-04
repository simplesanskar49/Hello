import React from 'react'
import { Button, Checkbox, Form, Input, Card, Col, Row } from 'antd';
import "antd/dist/antd.css"
import { useState } from 'react';

const FormDetails = () => {



  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 6,
      },
    },
  };
  const [emp, setEmp] = useState({
    amount: "",
    order_id: "",
    phone: "",
    email: "",


  });


  const onInputChange = e =>{
    setEmp({...emp,[e.target.id]:e.target.value})
  };
  
   const handleSubmit=()=>{
    const m_id="TSRTCP0324401625559";
     const order_id="10234567810";
     console.log(emp);
     
        // window.open(`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${m_id}&orderId=${order_id}`);
       // navigate('/')
        
   
  
   }

  return (
    <div>
      <div className="container">
      <Row>
        <Col span={12} offset={7}>
        <Card  bordered={true} style={{ width: 600 , textAlign: 'center'}}>
     
      <Form {...formItemLayout} style={{ marginRight: "100px" }} >
          
            <Form.Item
            label="Amount"
            rules={[
              {
                required: true,
                
              },
            ]}
          >
            <Input
              type="number"
              className="form-control"
             
              placeholder="Amount"
              id="amount" value={emp.amount}  
        onChange={e => onInputChange(e)} required
            />
          </Form.Item>
          

          <Form.Item
            label="Order ID"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              type="text"
              className="form-control"
              
              placeholder="Order Id"
              id="order_id" value={emp.order_id} 
        onChange={e => onInputChange(e)} required
              //onChange={()=>{makeId()}}
              //value={this.ID}
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            rules={[
              {
                required: true,

                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              style={{ width: "100%" }}
              type="text"
              required
              className="form-control"
              id="phone"
              placeholder="Phone"
               value={emp.phone}  
        onChange={e => onInputChange(e)} 
            />
          </Form.Item>

          <Form.Item
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="Email"
               value={emp.email}  
        onChange={e => onInputChange(e)} 
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={()=>{handleSubmit()}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
     
      </Card>

        </Col>
      </Row>
      

        
      </div>
    </div>
  )
}

export default FormDetails