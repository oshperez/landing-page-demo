import styled from "styled-components";

const ServiceCard = styled.div`
  position: relative;
  min-width: min(320px, 100%);
  min-height: 300px;
  background-color: #fff;
  overflow: hidden;
  filter: drop-shadow(${({ theme }) => theme.shadow.dropShadow[1]});
`;

export default ServiceCard;
