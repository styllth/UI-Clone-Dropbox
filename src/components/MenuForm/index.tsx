import React, { useState } from "react";
import FormLogin from "./components/formLogin";
import FormRegister from "./components/formRegister";

import { Container, Navigation, DropboxLogo, Form, MenuClose } from "./styles";

const MenuForm: React.FC = () => {
  const [loginForm, setLoginFrom] = useState(false);
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handleToggle}>
          <MenuClose>X</MenuClose>
        </button>
      </Navigation>

      <Form>
        {loginForm ? (
          <FormLogin setLoginFrom={setLoginFrom} />
        ) : (
          <FormRegister setLoginFrom={setLoginFrom} />
        )}
      </Form>
    </Container>
  );
};

export default MenuForm;
