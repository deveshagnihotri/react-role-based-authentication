import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function AddModal(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bike, setBikes] = useState('');
  const [owner, setOwner] = useState('');
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1>Add to Item </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value.trim())}
              />
            </Form.Group>

            <Form.Group controlId="formBasicBikeName">
              <Form.Label>Bike Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Bike Name"
                value={bike}
                onChange={e => setBikes(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Owner</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Owner"
                value={owner}
                onChange={e => setOwner(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={e => {
              props.handlesubmit(name, email, bike, owner);
              props.onHide();
            }}
            variant="primary"
            type="submit"
            value="Save"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
