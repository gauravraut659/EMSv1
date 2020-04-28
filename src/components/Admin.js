import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {Table} from 'react-bootstrap';
export default class Admin extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn,
            emps:[]
        }
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        
        fetch('https://localhost:44379/api/Employees')
        .then(response=> response.json())
        .then(data=>{
            this.setState({emps:data});
        }
        );
    }
    render() {
        const{emps} = this.state;
        if(this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Welcome to admin page.</h1>
                <Link to="/logout">Logout</Link>
                    <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                            <tr>
                                <th>EmployeeID</th>
                                <th>EmployeeName</th>
                                <th>EmployeeSurname</th>
                                <th>EmployeeEmailID</th>
                                <th>EmployeeRole</th>
                                <th>EmployeeStatus</th>    
                            </tr>
                    </thead>
                        <tbody>
                            {emps.map(emp =>
                                <tr key ={emp.EmployeeID}>  
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.surname}</td>
                                <td>{emp.emailId}</td>
                                <td>{emp.role}</td>
                                <td>{emp.status}</td>
                                </tr>
                            )} 
                        </tbody>        
                    </Table>
            </div>
        )
    }
}
