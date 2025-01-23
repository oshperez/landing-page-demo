import InputField from "components/InputField/InputField";
import StyledNewsletterForm from "./NewsletterForm.styled";
import Button from "components/Button/Button";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";

const NewsletterForm = (props) => {
  return (
    <StyledNewsletterForm>
      <InputField placeholder="Enter your email" pl="lg" pill />
      <Button as="button" type="submit" variant="contained">
        <PlaneIcon css="display: flex" />
      </Button>
    </StyledNewsletterForm>
  );
};

export default NewsletterForm;
