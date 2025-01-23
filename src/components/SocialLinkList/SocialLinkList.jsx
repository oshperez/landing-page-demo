import Link from "../Link/Link.styled";
import List from "../List/List.styled";
import ListItem from "../ListItem/ListItem.styled";

import socialLinkData from "./SocialLinkList.data";

const SocialLinkList = (props) => {
  return (
    <List direction="row" dense>
      {socialLinkData.map((link) => (
        <ListItem>
          <Link href={link.address}>{link.icon}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SocialLinkList;
