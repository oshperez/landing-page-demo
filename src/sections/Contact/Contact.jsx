import { useState } from "react";

import Container from "components/Container/Container.styled";
import Box from "components/Box/Box.styled";
import Grid from "./Grid.styled";
import ContactCard from "./ContactCard/ContactCard.styled";
import ContactForm from "./ContactForm/ContactForm";
import Typography from "components/Typography/Typography.styled";
import Section from "components/Section/Section.styled";
import Alert from "components/Alert/Alert";

function Contact() {
  const [alert, setAlert] = useState({ isVisible: false, isError: false });

  return (
    <Section id="contact">
      <Container>
        <Grid>
          <Box />
          <Box>
            <ContactCard>
              <Typography as="h1" mb="md" css="white-space: nowrap">
                Let's talk.
              </Typography>
              {alert.isVisible && (
                <Alert error={alert.isError} setAlert={setAlert} />
              )}
              <ContactForm setAlert={setAlert} />
            </ContactCard>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}

export default Contact;
