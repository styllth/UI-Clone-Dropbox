import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Section from "./components/Section";
import SideMenu from "./components/SideMenu";
import MenuForm from "./components/MenuForm";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Section variant="blue">
        <>
          <h2>Concentre-se apenas no trabalho importante</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            orci nulla. Sed sed massa sem. Proin eu lobortis ligula. Nullam at
            iaculis erat, vel vestibulum massa. Quisque viverra facilisis enim.
            Nunc ex enim, pulvinar vel lectus id, porttitor scelerisque libero.
            Nam purus urna, ultricies vestibulum erat vel, vulputate dictum
            neque. Aenean pulvinar ultricies tellus, at aliquet lectus blandit
            laoreet. Morbi convallis consectetur lacus. Aenean blandit massa
            arcu, vitae fringilla enim porttitor sit amet. Fusce eget est sed
            mauris imperdiet porta accumsan vitae lorem. Proin feugiat vel metus
            quis ullamcorper. Donec ornare laoreet turpis, at aliquet magna
            varius sed.
          </p>
        </>
      </Section>

      <Section variant="beige">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <img
            alt="img"
            src="https://cfl.dropboxstatic.com/static/images/index/zeus/home-hero-vflMv-jgR.jpg"
            width="400px"
            style={{
              flex: 1,
              justifyContent: "flex-start",
            }}
          />
          <div
            style={{
              marginLeft: "3rem",
              maxWidth: 450,
              justifyContent: "flex-start",
            }}
          >
            <h2>Diga adeus ao trabalho maçante</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              orci nulla. Sed sed massa sem. Proin eu lobortis ligula. Nullam at
              iaculis erat, vel vestibulum massa. Quisque viverra facilisis
              enim. Nunc ex enim, pulvinar vel lectus id, porttitor scelerisque
              libero. Nam purus urna, ultricies vestibulum erat vel, vulputate
              dictum neque.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="blue">
        <>
          <h2>Armazenamento e compartilhamento de arquivos são só o começo</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            orci nulla. Sed sed massa sem. Proin eu lobortis ligula. Nullam at
            iaculis erat, vel vestibulum massa. Quisque viverra facilisis enim.
            Nunc ex enim, pulvinar vel lectus id, porttitor scelerisque libero.
            Nam purus urna, ultricies vestibulum erat vel, vulputate dictum
            neque. Aenean pulvinar ultricies tellus, at aliquet lectus blandit
            laoreet. Morbi convallis consectetur lacus. Aenean blandit massa
            arcu, vitae fringilla enim porttitor sit amet. Fusce eget est sed
            mauris imperdiet porta accumsan vitae lorem. Proin feugiat vel metus
            quis ullamcorper. Donec ornare laoreet turpis, at aliquet magna
            varius sed. Quisque ante justo, auctor sit amet felis id, laoreet
            porttitor lectus. Integer vel laoreet nulla. Integer et tempus
            ipsum. Cras massa velit, egestas sed maximus laoreet, vehicula a
            sapien. Cras ante lectus, feugiat id mauris ut, dignissim tempor
            metus. Nulla sollicitudin enim nunc, et varius ex aliquam et.
            Vestibulum ultrices vulputate.{" "}
          </p>
        </>
      </Section>

      <Section variant="white">
        <>
          <h2>Encontre o plano do Dropbox perfeito para você</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            orci nulla. Sed sed massa sem. Proin eu lobortis ligula. Nullam at
            iaculis erat, vel vestibulum massa. Quisque viverra facilisis enim.
            Nunc ex enim, pulvinar vel lectus id, porttitor scelerisque libero.
            Nam purus urna, ultricies vestibulum erat vel, vulputate dictum
            neque. Aenean pulvinar ultricies tellus, at aliquet lectus blandit
            laoreet. Morbi convallis consectetur lacus. Aenean blandit massa
            arcu, vitae fringilla enim porttitor sit amet. Fusce eget est sed
            mauris imperdiet porta accumsan vitae lorem. Proin feugiat vel metus
            quis ullamcorper. Donec ornare laoreet turpis, at aliquet magna
            varius sed. Quisque ante justo, auctor sit amet felis id, laoreet
            porttitor lectus. Integer vel laoreet nulla. Integer et tempus
            ipsum. Cras massa velit, egestas sed maximus laoreet, vehicula a
            sapien. Cras ante lectus, feugiat id mauris ut, dignissim tempor
            metus. Nulla sollicitudin enim nunc, et varius ex aliquam et.
            Vestibulum ultrices vulputate.{" "}
          </p>
        </>
      </Section>

      <Section variant="black">
        <>
          <h2>Footer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            orci nulla. Sed sed massa sem. Proin eu lobortis ligula. Nullam at
            iaculis erat, vel vestibulum massa. Quisque viverra facilisis enim.
            Nunc ex enim, pulvinar vel lectus id, porttitor scelerisque libero.
            Nam purus urna, ultricies vestibulum erat vel, vulputate dictum
            neque. Aenean pulvinar ultricies tellus, at aliquet lectus blandit
            laoreet. Morbi convallis consectetur lacus. Aenean blandit massa
            arcu, vitae fringilla enim porttitor sit amet. Fusce eget est sed
            mauris imperdiet porta accumsan vitae lorem. Proin feugiat vel metus
            quis ullamcorper. Donec ornare laoreet turpis, at aliquet magna
            varius sed. Quisque ante justo, auctor sit amet felis id, laoreet
            porttitor lectus. Integer vel laoreet nulla. Integer et tempus
            ipsum. Cras massa velit, egestas sed maximus laoreet, vehicula a
            sapien. Cras ante lectus, feugiat id mauris ut, dignissim tempor
            metus. Nulla sollicitudin enim nunc, et varius ex aliquam et.
            Vestibulum ultrices vulputate.{" "}
          </p>
        </>
      </Section>

      <SideMenu>
        <MenuForm />
      </SideMenu>
    </>
  );
};

export default App;
