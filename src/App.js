import React, { useState } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./style";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);

  const addNewUser = () => {
    setUsers([{id: Math.random(), name, age}]);
  };

  const changeInputName = (event) => {
    setName(event.target.value)
  };

  const changeInputAge = (event) => {
    setAge(event.target.value)
  };


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
