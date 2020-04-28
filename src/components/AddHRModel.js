import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';
export class AddHRModel extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('', {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
                EmployeeId: null,
                EmployeeFirstName: event.target.EmployeeFirstName.value,
                EmployeeLastName: event.target.EmployeeLastName.value,
                EmployeeEmailId: event.target.EmployeeEmailId.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert("Failed")
                })
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add New HR
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="EmployeeId">
                                        <Form.Label>Employee Id</Form.Label>
                                        <Form.Control type="text" name="EmployeeId" required placeholder="Plese Enter Employee ID"></Form.Control>
                                    </Form.Group>


                                    <Form.Group controlId="EmployeeFirstName">
                                        <Form.Label>Employee First Name</Form.Label>
                                        <Form.Control type="text" name="EmployeeFirstName" required placeholder="Plese Enter Employee First Name"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="EmployeeLastName">
                                        <Form.Label>Employee Last Name</Form.Label>
                                        <Form.Control type="text" name="EmployeeLastName" required placeholder="Plese Enter Employee Last Name"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="EmployeeEmailId">
                                        <Form.Label>Employee Email Id</Form.Label>
                                        <Form.Control type="email" name="EmployeeEmailId" required placeholder="Plese Enter Employee Email Id"></Form.Control>
                                    </Form.Group>

                                    {/* <Form.Group controlId="EmployeeUserRole">
                                        <Form.Label>Employee User Role</Form.Label>
                                        <RadioGroup aria-label="UserRole" name="UserRole1" value={value} onChange={handleChange}>
                                            <FormControlLabel value="Active" control={<Radio />} label="Active" />
                                            <FormControlLabel value="InActive" control={<Radio />} label="InActive" />
                                        </RadioGroup>
                                    </Form.Group> */}

                                    <FormGroup>
                                        <Button variant="primary" type="submit" >
                                            Add Employee
                                        </Button>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}

export default AddHRModel;