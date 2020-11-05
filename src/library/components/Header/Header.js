import React, { useState } from "react";
import {
  LogoSmall,
  HeaderTag,
  Container,
  Figure,
  Logo,
  Nav,
  Ol,
  Li,
  Link,
} from "./HeaderStyles";
import { Images } from "../../../resources/Images";
export const Header = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };

  const handleOpenMenu = () => {
    setActive(true);
  };

  const handleCloseMenu = () => {
    setActive(false);
  };

  return (
    <>
      <LogoSmall
        onClick={handleMenu}
        src={Images.marvelLogoIcon}
        alt="Logo de youtube"
      />
      <HeaderTag>
        <Container>
          <Figure>
            <Link to="/">
              <Logo src={Images.marvelLogo} alt="Marvel Logo" />
            </Link>
          </Figure>
          <Nav active={active}>
            <Ol>
              <Li>
                <Link to="/" onClick={handleCloseMenu}>
                  Home
                </Link>
              </Li>
              <Li>
                <Link to="/characters" onClick={handleCloseMenu}>
                  Characters
                </Link>
              </Li>
              <Li>
                <Link to="/comics" onClick={handleCloseMenu}>
                  Comics
                </Link>
              </Li>
              <Li>
                <Link to="/stories" onClick={handleCloseMenu}>
                  Stories
                </Link>
              </Li>
              <Li>
                <Link to="/bookmarks" onClick={handleCloseMenu}>
                  Bookmarks
                </Link>
              </Li>
            </Ol>
          </Nav>
        </Container>
      </HeaderTag>
      {children}
    </>
  );
};
