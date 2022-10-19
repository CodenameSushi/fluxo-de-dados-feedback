import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.post.titulo}</TitleHeader>
      <Image src={props.post.foto} />
      <Description>{props.post.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
