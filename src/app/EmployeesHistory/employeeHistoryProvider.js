class EmployeeHistoryProvider {
  endpointPath = 'http://localhost:3000';

  getEmployee(employeeId) {
    return fetch(
      this.endpointPath + '/employees/' + employeeId
    ).then(response => response.json());
  }
}

export default EmployeeHistoryProvider;
