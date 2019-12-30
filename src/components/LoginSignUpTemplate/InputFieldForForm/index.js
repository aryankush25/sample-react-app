import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
`;

const FormEntryDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 5px;
  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const ErrorDiv=styled.div`
font-weight:bold;
font-size: 13px;`;


const renderField = ({ input, type , meta: { touched, error }}) => {
  
   return(<div>
    <Input {...input} type={type} />
    {touched &&
        ((error && <ErrorDiv>{error}</ErrorDiv>))}
  </div>)
  
};
const InputFieldForForm = ({ name, labelName, type, validate }) => {
  return (
    <FormEntryDiv>
      <Label htmlFor={name}>{labelName}</Label>
      <Field
        name={name}
        component={renderField}
        type={type}
        validate={validate}
      />
    </FormEntryDiv>
  );
};
export default InputFieldForForm;
