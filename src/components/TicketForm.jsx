import React  from 'react';
import {Input} from 'react-materialize';
import '../App.css';

export function AddTicketForm (props){

  let rows=[];
  for (var j=1, i = 0; i < props.tedad ;j++, i++) {
    rows.push(
      <div key={i}>
        <table>
          <tbody>
            <tr>
              <td style={{color:'black'}}> بلیت{j}</td>
              <td>
                <Input type="text" label="نام " name="firstName"  l={6} m={6} s={12}    required />
                <Input type="text" label="نام خانوادگی" l={6} m={6} s={12}  name="lastName" onChange={props.validateFormInput}  required />
              </td>
              <td>
                <Input type="email" label="ایمیل" l={6} m={6} s={12} name="email" onChange={props.validateFormInput}  required />
                <Input type="text" label="شماره موبایل " l={6} m={6} s={12} name="number" onChange={props.validateFormInput} required />
              </td>
            </tr>
            <br/>
          </tbody>
        </table>
      </div>
    )
  }
  return(
    <div>


          {rows}


  </div>
  );
}
