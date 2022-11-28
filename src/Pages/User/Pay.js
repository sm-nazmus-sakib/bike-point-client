import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Pay = () => {
    return (
        <div className='pay'>
            <h4 className='mt-4 text-primary'> Payment System </h4>
            <Form className='m-4' style={{ width: '50%' }}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="number" placeholder="Enter Your Acc Number" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Confirm Pay
                </Button>
                <br />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </div>
    );
};

export default Pay;