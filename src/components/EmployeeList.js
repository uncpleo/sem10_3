import React, { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeList = ({ setEmployeeToEdit }) => {
  const { state, dispatch } = useContext(EmployeeContext);

  return (
    <div>
      {state.map(employee => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.address}</p>
          <p>{employee.city}</p>
          <button onClick={() => setEmployeeToEdit(employee)}>Editar</button>
          <button onClick={() => dispatch({ type: 'DELETE_EMPLOYEE', payload: employee.id })}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
