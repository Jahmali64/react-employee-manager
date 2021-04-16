import React, {useState}  from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';

import Button from 'components/buttons/Button';
import FormInput from 'components/forms/FormInput';
import { UserAdd } from 'components/icons';
import firebaseApp from 'firebase/firebaseConfig';

const WidgetStyles = styled.aside `  
    background:#ffffff;
    box-shadow:0 0 3px 0px #c5c5c5;
    border-radius: 8px;
    padding: 2rem;
    header{
      display:flex;
      color: #848484;
      align-items:center;
      margin-bottom:1rem;
    }
    svg{
      width:1.5rem;
      stroke: #848484;
      margin-right: 0.25rem;
    }
    button{
      cursor: pointer;
      color: #ffffff;
      background-color: #a7b7d6;
    }
`;


const AddEmployeeWidget = (props) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  function handleInsert(){
    // make a new employee with a uid
    const id = uuidv4().substr(0, 8);
    const userId = firebaseApp.auth().currentUser.uid;
    const docRef = firebaseApp.firestore().collection(userId).doc('hr').collection('employees').doc(id);

    //add new employee
    docRef.set({
      id,
      name,
      department
    })
  }

  return ( 
    <WidgetStyles>
      <header>
        <UserAdd/>
          <h2>
            Add New Employee
          </h2>
      </header>
      <FormInput type="text" label="Fullname" onChange={(e) => setName(e.target.value)} />
      <FormInput type="text" label="Department" onChange={(e) => setDepartment(e.target.value)} />
      <Button label="Add Employee" onClick={handleInsert} />
    </WidgetStyles>
  );
}

export default AddEmployeeWidget;