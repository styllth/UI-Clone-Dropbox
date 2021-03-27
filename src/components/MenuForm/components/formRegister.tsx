import React from "react";

import { Input } from "../styles";
import Checkbox from "./chekcbox";

type FormRegisterProps = {
  setLoginFrom: (value: boolean) => void;
};

const FormRegister: React.FC<FormRegisterProps> = ({ setLoginFrom }) => {
  return (
    <>
      <span className="title">Registre-se</span>
      <span className="subtitle">
        ou{" "}
        <a href="/#login" onClick={() => setLoginFrom(true)}>
          acesse sua conta
        </a>
      </span>
      <Input type="text" placeholder="Nome" />
      <Input type="text" placeholder="Sobrenome" />
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <Checkbox name="agree">
        Concordo com os <a href="/#terms">Termos do Dropbox</a>
      </Checkbox>

      <button>Registre-se</button>
    </>
  );
};

export default FormRegister;
