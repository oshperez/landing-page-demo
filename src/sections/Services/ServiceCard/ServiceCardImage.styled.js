import styled from "styled-components";

export const ServiceCardImage = styled.div`
  width: 60%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-position: 50%;
  background-size: cover;
  clip-path: polygon(25% 0, 100% 0, 60% 100%, 0 100%, 0 60%);
`;

export default ServiceCardImage;