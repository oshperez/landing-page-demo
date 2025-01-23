import NavLink from "components/Link/NavLink.styled";
import List from "components/List/List.styled";
import ListItem from "components/ListItem/ListItem.styled";
import StyledNavMenu from "./NavMenu.styled";

import linkData from "../links.data";

const NavMenu = ({ navOpen, activeSection }) => {
  return (
    <StyledNavMenu navOpen={navOpen}>
      <List direction="column">
        {linkData.map((link) => (
          <ListItem key={link.tag} p="sm">
            <NavLink href={`#${link.to}`} active={activeSection === link.to}>
              {link.tag}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </StyledNavMenu>
  );
};

export default NavMenu;
