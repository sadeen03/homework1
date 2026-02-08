function EmployeeRecord({ salary, position, company }) {
  return (
    <div className="card">
      <p>
        Salary: {salary} - Position: {position} - Company: {company}
      </p>
    </div>
  );
}

export default EmployeeRecord;
