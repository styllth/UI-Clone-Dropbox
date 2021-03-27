import React from "react";

import {
  Container,
  HeaderWrapper,
  Header,
  DropboxLogo,
  Content,
} from "./styles";

type SectionProps = {
  variant: "blue" | "beige" | "white" | "black";
};

const Section: React.FC<SectionProps> = ({ children, variant }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />
            <span>Dropbox</span>
          </h1>

          <button onClick={handleToggle}>
            {buttonVariant === 0 ? "Interagir" : "Acessar"}
          </button>
        </Header>
      </HeaderWrapper>

      <Content>{children}</Content>
    </Container>
  );
};

export default Section;
