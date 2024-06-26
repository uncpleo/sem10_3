import React, { useState } from 'react';
import './App.css';
import { EmployeeProvider } from './context/EmployeeContext';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  return (
    <div>
      <EmployeeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Gestión de Empleados</h1>
          <EmployeeForm employeeToEdit={employeeToEdit} />
          <EmployeeList setEmployeeToEdit={setEmployeeToEdit} />
        </header>
      </div>
    </EmployeeProvider>
    </div>
  );
}

export default App;

