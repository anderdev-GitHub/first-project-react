import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { Container, H1, Image, ContainerItens, Button, User } from "./style";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    };

    fetchUsers();
  }, []);

  // REACT HOOK => useEffect (Efeito Colateral)
  // A minha aplicação inicia ( A pagina carregou, useEffect é chmado!)
  // Quando um estado que está no array de dependencia do userEffect e alterado

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;