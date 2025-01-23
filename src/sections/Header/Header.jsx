import { useState, useEffect } from "react";

import StyledHeader from "./Header.styled";
import Container from "components/Container/Container.styled";
import Navigation from "components/Navigation/Navigation.styled";
import Logo from "components/Logo/Logo.styled";
import List from "components/List/List.styled";
import ListItem from "components/ListItem/ListItem.styled";
import NavLink from "components/Link/NavLink.styled";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";
import Button from "components/Button/Button";
import BarIcon from "components/BarIcon/BarIcon";
import NavMenu from "sections/Header/NavMenu/NavMenu";
import PillButton from "components/PillButton/PillButton";

import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import linkData from "./links.data";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <StyledHeader>
      <Container>
        <Navigation>
          <Logo>Logo</Logo>
          <List direction="row" dense mq={{ down: { lg: `display: none;` } }}>
            {linkData.map((link) => (
              <ListItem key={link.to}>
                <NavLink
                  href={`#${link.to}`}
                  active={activeSection === link.to}
                >
                  {link.tag}
                </NavLink>
              </ListItem>
            ))}
          </List>
          <FlexContainer alignItems="center">
            <FlexContainer dropShadow>
              <Button startIcon={<PhoneIcon width={15} />} fontSize="300">
                (+1) 943-888-609
              </Button>
              <PillButton to="#contact">Get in touch</PillButton>
            </FlexContainer>
            <BarIcon open={navOpen} setOpen={setNavOpen} />
            <NavMenu navOpen={navOpen} activeSection={activeSection} />
          </FlexContainer>
        </Navigation>
      </Container>
    </StyledHeader>
  );
}

export default Header;
