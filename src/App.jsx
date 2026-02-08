import { useState } from 'react'
import EmployeeRecord from "./EmployeeRecord";

function App() {
  return (
    <div>
      <EmployeeRecord
        salary="90000"
        position="Senior SDE"
        company="Amazon"
      />

      <EmployeeRecord
        salary="12000"
        position="Junior SDE"
        company="Google"
      />

      <EmployeeRecord
        salary="10000"
        position="Project Manager"
        company="Netflix"
      />
    </div>
  );
}

export default App;
