import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {

  const [allValues, setAllValues] = useState({
    titulo:'',
    foto:'',
    descricao:''
  });

  const changeHandler = (e) => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }
  
  const onClick = () => {
    props.setPost(allValues)
    setAllValues({titulo:'',
    foto:'',
    descricao:''})
    
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo" >
          Titulo:
          <Input id="titulo" name="titulo" value={allValues.titulo} onChange={changeHandler} />
        </StyledLabel>
        <StyledLabel htmlFor="foto" >
          Imagem:
          <Input id="foto" name="foto" value={allValues.foto} onChange={changeHandler} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" name="descricao" value={allValues.descricao} onChange={changeHandler} />
        </StyledLabel>
        <SendButton onClick={onClick}>Enviar Postagem</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
