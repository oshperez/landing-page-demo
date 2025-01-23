import Section from "components/Section/Section.styled";
import Grid from "./Grid.styled";
import Container from "components/Container/Container.styled";
import Box from "components/Box/Box.styled";
import FlexContainer from "components/FlexContainer/FlexContainer.styled";
import Heading from "./Heading.styled";
import Divider from "components/Divider/Divider.styled";
import Typography from "components/Typography/Typography.styled";
import Image from "components/Image/Image.styled";
import ImageWithBackgroundShape from "./ImageWithBackgroundShape/ImageWithBackgroundShape";
import carRearEndImage from "assets/images/car-rear-end.jpg";

function About() {
  return (
    <Section id="about">
      <Container>
        <Grid>
          <FlexContainer
            flexDirection="column"
            justifyContent="start"
            css="grid-area: heading;"
          >
            <Heading as="h1" uppercase>
              Who we are.
            </Heading>
            <Divider
              variant="main"
              position="start"
              color="text-primary"
              round
              mq={{ down: { md: `margin-inline: auto;` } }}
            />
          </FlexContainer>
          <Box
            css={`
              grid-area: text;
              align-self: end;
            `}
            mq={{
              up: { lg: `padding-right: 4em` },
              down: { md: `text-align: center;` },
            }}
          >
            <Typography
              as="h2"
              fontWeight="semi-bold"
              mt="lg"
              mq={{ down: { md: `margin-top: 1em` } }}
            >
              Aliquip elit tempor sint ad ad.
            </Typography>
            <Typography>
              Elit commodo dolore minim ipsum cupidatat officia culpa eu do
              aliquip. Dolore nostrud culpa tempor nisi proident esse qui elit
              enim et. Qui occaecat occaecat occaecat cupidatat enim. Lorem qui
              ex ut dolor amet amet cillum quis.Aliqua aliquip reprehenderit eu
              aliqua ad officia sunt fugiat elit sint. Qui ipsum voluptate
              mollit elit culpa. Aliqua esse non commodo Lorem anim laboris qui
              laboris esse consectetur deserunt sunt. Ea sint consequat eu
              dolore anim deserunt cillum qui excepteur.
            </Typography>
          </Box>
          <FlexContainer css="grid-area: small-image;">
            <ImageWithBackgroundShape />
          </FlexContainer>
          <Image
            src={carRearEndImage}
            alt="Rear end of classic car"
            css={`
              grid-area: large-image;
              width: 100%;
            `}
            mq={{ down: { xl: `display: none;` } }}
          />
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
