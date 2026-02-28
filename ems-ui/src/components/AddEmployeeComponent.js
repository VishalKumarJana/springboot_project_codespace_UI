import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { EmployeeService } from '../services/EmployeeService';

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const {employeeId} = useParams();

    const saveOrUpdateEmployee = (e) =>{

        e.preventDefault();

        const employee = {firstName, lastName, emailId};
        
        if(employeeId){
            EmployeeService.updateEmployee(employeeId,employee).then((response) => {
                navigate('/employees');
            }).catch(error => {
                console.log(error)
            })
        }else{
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            });
        }

    }

    useEffect(() => {
        EmployeeService.getEmployeeById(employeeId).then((response) => {
            setFirstName(response.data.firstName || '')
            setLastName(response.data.lastName || '')
            setEmailId(response.data.emailId || '')
        }).catch(error => {
            console.log(error)
        })
    },[employeeId]) 

    const title = () => {

        if(employeeId){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Create Employee</h2>
        }

    }


  return (
    <div>
        <br/>
        <br/>
      <div className="conatiner">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">
                                First Name :
                            </label>
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                name="firstName"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">
                                Last Name :
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                name="lastName"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">
                                Email-Id :
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email-Id"
                                name="emailId"
                                className="form-control"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            >
                            </input>
                        </div>

                        <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)} style={{marginRight: "10px"}}>
                            Submit
                        </button>
                        <Link to="/employees" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent
