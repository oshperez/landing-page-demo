import StyledHero from "./Hero.styled";
import Container from "components/Container/Container.styled";
import Typography from "components/Typography/Typography.styled";
import Button from "components/Button/Button";
import Highlight from "components/Highlight/Highlight.styled";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";

function Hero() {
  return (
    <StyledHero id="home">
      <Container>
        <Typography as="h1">
          Bringing cars <Highlight>back to life.</Highlight>
        </Typography>
        <Typography
          as="h2"
          fontWeight="semi-bold"
          mb="lg"
          mq={{ up: { lg: `width: 60%` } }}
        >
          Labore ad minim labore eiusmod id tempor nostrud est. Consectetur ad
          ad consequat aliqua quis.
        </Typography>
        <Button
          to="#contact"
          endIcon={<ArrowIcon />}
          variant="contained"
          size="large"
          uppercase
        >
          Contact us
        </Button>
      </Container>
    </StyledHero>
  );
}

export default Hero;
