import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee";
class EmployeeService {
    saveEmployee(employee){
          return axios.post(EMPLOYEE_API_BASE_URL, employee);        
    }
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }
    updateEmployee(employee, id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}
export default new EmployeeService();