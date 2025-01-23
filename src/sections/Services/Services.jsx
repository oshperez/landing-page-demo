import Section from "components/Section/Section.styled";
import Container from "components/Container/Container.styled";
import Typography from "components/Typography/Typography.styled";
import Divider from "components/Divider/Divider.styled";
import Grid from "./Grid.styled";
import ServiceCard from "./ServiceCard/ServiceCard.styled";
import ServiceCardImage from "./ServiceCard/ServiceCardImage.styled";
import ServiceCardText from "./ServiceCard/ServiceCardText.styled";
import serviceCardData from "./ServiceCard/ServiceCard.data";

function Services() {
  return (
    <Section id="services">
      <Container>
        <Typography as="h1" textAlign="center" uppercase>
          What we do.
        </Typography>
        <Divider variant="main" color="text-primary" round />
        <Typography
          as="h2"
          fontWeight="semi-bold"
          textAlign="center"
          mb="md"
          mt="md"
        >
          Adipisicing deserunt culpa proident labore nostrud adipisicing dolor
          officia fugiat.
        </Typography>
        <Grid>
          {serviceCardData.map(({ service, description, image }) => (
            <ServiceCard>
              <ServiceCardImage src={image} />
              <ServiceCardText>
                <Typography as="h3" uppercase mb="sm">
                  {service}
                </Typography>
                <Divider fullWidth gutterBottom />
                <Typography>{description} </Typography>
              </ServiceCardText>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Services;
