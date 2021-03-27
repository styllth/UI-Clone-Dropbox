import React from "react";

import { Input } from "../styles";
import Checkbox from "./chekcbox";

type FormLoginProps = {
  setLoginFrom: (value: boolean) => void;
};

const FormLogin: React.FC<FormLoginProps> = ({ setLoginFrom }) => {
  return (
    <>
      <span className="title">Acesse</span>
      <span className="subtitle">
        sua conta no Dropbox ou{" "}
        <a href="/#register" onClick={() => setLoginFrom(false)}>
          crie uma nova conta
        </a>
      </span>
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <Checkbox name="remember_me">Lembrar meus dados</Checkbox>

      <button>Acessar</button>
    </>
  );
};

export default FormLogin;
