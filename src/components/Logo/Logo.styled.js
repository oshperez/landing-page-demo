import styled from "styled-components";
import { mediaQueryMixin } from "utils/mixins";

const Logo = styled.p`
${mediaQueryMixin}
font-size: ${({theme}) => theme.typography.fontSize600};
`

export default Logo;