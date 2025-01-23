import styled from "styled-components";

const ContactCard = styled.div`
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.boxShadow[0]};
  padding-block: ${({ theme }) => theme.spacing.lg};
  padding-inline: clamp(1.5em, 1em + 4.5%, 2.5em);
  margin-block: 15%;

  @media (max-width: 600px) {
    margin-block: 0;
    margin-inline: 8%;
  }

  ${({ theme }) => theme.breakpoints.down.sm`
    margin-inline: 0;
    padding-top: ${theme.spacing.xl}
  `}
`;

export default ContactCard;
