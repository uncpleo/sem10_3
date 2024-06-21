import React, { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeList = ({ setEmployeeToEdit }) => {
  const { state, dispatch } = useContext(EmployeeContext);

  return (
    <div>
      <table className='crd'>
        <tr className='titulo_T'>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Ciudad</th>
          <th>Opciones</th>
        </tr>
        {state.map(employee => (
        <tr className='contenido_T' key={employee.id}>
          <td>{employee.name}</td>
          <td><p>{employee.address}</p></td>
          <td><p>{employee.city}</p></td>
          <td><button onClick={() => setEmployeeToEdit(employee)}>Editar</button>
          <button onClick={() => dispatch({ type: 'DELETE_EMPLOYEE', payload: employee.id })}>
            Eliminar
          </button></td>
        </tr>
      ))}
      </table>
    </div>
  );
};

export default EmployeeList;
