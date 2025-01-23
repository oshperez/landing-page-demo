import styled from "styled-components";
import carImage from "assets/images/car.png";
import Section from "components/Section/Section.styled";

const HeroSection = styled(Section)`
  width: 100%;
  min-height: 750px;
  background-image: url(${carImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top 100% left;
  padding-top: 11em;

  ${({ theme }) => theme.breakpoints.down.md`
    min-height: 800px;
    background-position: left 28% bottom;
    padding-top: 10em;

  `}
`;

export default HeroSection;
