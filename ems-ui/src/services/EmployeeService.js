import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'https://spring-codespace-app.onrender.com/employees';

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