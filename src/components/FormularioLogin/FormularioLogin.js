import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {

 const onChangeUser = (e) => {
    props.setUser(e.target.value)
    props.setLogUser(e.target.value)
  }

  const onChangeUserPic = (e) => {
    props.setUserPic(e.target.value)
    props.setLogUserPic(e.target.value)
  }


  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.user} onChange={onChangeUser}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.userPic} onChange={onChangeUserPic}/>
        </StyledLabel>
        <SendButton onClick={props.login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
