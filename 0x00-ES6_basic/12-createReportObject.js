export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: employeesList,
    getNumberOfDepartments: (a) => Object.keys(a).length,
  };

  return obj;
}
