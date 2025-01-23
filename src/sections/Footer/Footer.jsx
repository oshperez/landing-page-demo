import Grid from "./Grid.styled";
import Container from "components/Container/Container.styled";
import Logo from "components/Logo/Logo.styled";
import Navigation from "./Navigation.styled";
import NavSection from "./NavSection.styled";
import Typography from "components/Typography/Typography.styled";
import List from "components/List/List.styled";
import ListItem from "components/ListItem/ListItem.styled";
import Box from "components/Box/Box.styled";
import NewsletterForm from "components/NewsletterForm/NewsletterForm";
import Divider from "components/Divider/Divider.styled";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";
import BottomSection from "./BottomSection.styled";
import SocialLinkList from "components/SocialLinkList/SocialLinkList";
import StyledFooter from "./Footer.styled";
import Link from "components/Link/Link.styled";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Grid>
          <Logo mq={{ down: { sm: `text-align: center;` } }}>Logo</Logo>
          <Navigation py="lg">
            <NavSection>
              <Typography
                as="h3"
                fontSize="400"
                fontWeight="semi-bold"
                uppercase
                mb="md"
              >
                Company
              </Typography>
              <List>
                <ListItem>
                  <Link>Services</Link>
                </ListItem>
                <ListItem>
                  <Link>About us</Link>
                </ListItem>
                <ListItem>
                  <Link>Contact</Link>
                </ListItem>
              </List>
            </NavSection>
            <NavSection>
              <Typography
                as="h3"
                fontSize="400"
                fontWeight="semi-bold"
                uppercase
                mb="md"
              >
                Legal
              </Typography>
              <List>
                <ListItem>
                  <Link>License</Link>
                </ListItem>
                <ListItem>
                  <Link>Privacy Policy</Link>
                </ListItem>
              </List>
            </NavSection>
            <NavSection>
              <Typography
                as="h3"
                fontSize="400"
                fontWeight="semi-bold"
                uppercase
                mb="md"
              >
                Contact
              </Typography>
              <List>
                <ListItem>
                  <Typography fontSize="300">(+1) 943-888-609</Typography>
                </ListItem>
                <ListItem>
                  <Typography>company@gmail.com</Typography>
                </ListItem>
              </List>
            </NavSection>
          </Navigation>
          <Box
            my="lg"
            css="grid-area: newsletter;"
            mq={{
              down: { sm: `text-align: center;` },
            }}
          >
            <Typography
              as="h2"
              mb="md"
              fontSize="500"
              fontWeight="semi-bold"
              uppercase
            >
              Stay tuned.
            </Typography>
            <NewsletterForm />
          </Box>
          <Divider
            fullWidth
            thickness="0.5px"
            gutterBottom
            css="grid-area: divider"
          />
          <BottomSection mt="md" mb="lg">
            <Typography fontSize="300">
              &copy;2022 Company. All rights reserved
            </Typography>
            <FlexContainer dropShadow>
              <Box mr="lg" mq={{ down: { md: "display: none;" } }}>
                <Typography css="white-space: nowrap;">Find us on</Typography>
              </Box>
              <SocialLinkList />
            </FlexContainer>
          </BottomSection>
        </Grid>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
