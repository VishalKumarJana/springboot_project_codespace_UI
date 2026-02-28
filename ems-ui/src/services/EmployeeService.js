import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'https://potential-space-eureka-qv7grg97rp7f9pgp-9999.app.github.dev/employees';

export class EmployeeService{

    static getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    static createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }

    static getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+ '/' +employeeId);
    }

    static updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    }

    static deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId);
    }

}