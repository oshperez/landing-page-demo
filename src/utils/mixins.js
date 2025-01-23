import { css } from "styled-components";
import {
  checkIsPredeterminedSpaceSize,
  checkIsPredeterminedFontSize,
  checkIsPredeterminedFontWeight,
  kebabCaseToCamelCase,
} from "./helpers";

export const spaceMixin = css`
  /* Apply margin */
  ${({ theme, m }) =>
    m &&
    css`
      margin: ${checkIsPredeterminedSpaceSize(m) ? theme.spacing[m] : m};
    `}

  /* Apply margin inline */
  ${({ theme, mx }) =>
    mx &&
    css`
      margin-inline: ${checkIsPredeterminedSpaceSize(mx)
        ? theme.spacing[mx]
        : mx};
    `}
   
  /* Apply margin block */
  ${({ theme, my }) =>
    my &&
    css`
      margin-block: ${checkIsPredeterminedSpaceSize(my)
        ? theme.spacing[my]
        : my};
    `}

  /* Apply margin top */
  ${({ theme, mt }) =>
    mt &&
    css`
      margin-top: ${checkIsPredeterminedSpaceSize(mt) ? theme.spacing[mt] : mt};
    `}

  /* Apply margin bottom */
  ${({ theme, mb }) =>
    mb &&
    css`
      margin-bottom: ${checkIsPredeterminedSpaceSize(mb)
        ? theme.spacing[mb]
        : mb};
    `}

  /* Apply margin left */
  ${({ theme, ml }) =>
    ml &&
    css`
      margin-left: ${checkIsPredeterminedSpaceSize(ml)
        ? theme.spacing[ml]
        : ml};
    `}

  /* Apply margin right*/
  ${({ theme, mr }) =>
    mr &&
    css`
      margin-right: ${checkIsPredeterminedSpaceSize(mr)
        ? theme.spacing[mr]
        : mr};
    `}
    
  /* Apply padding */
  ${({ theme, p }) =>
    p &&
    css`
      padding: ${checkIsPredeterminedSpaceSize(p) ? theme.spacing[p] : p};
    `}

  /* Apply padding inline */
  ${({ theme, px }) =>
    px &&
    css`
      padding-inline: ${checkIsPredeterminedSpaceSize(px)
        ? theme.spacing[px]
        : px};
    `}

  /* Apply padding block */
  ${({ theme, py }) =>
    py &&
    css`
      padding-block: ${checkIsPredeterminedSpaceSize(py)
        ? theme.spacing[py]
        : py};
    `}

  /* Apply padding top */
  ${({ theme, pt }) =>
    pt &&
    css`
      padding-top: ${checkIsPredeterminedSpaceSize(pt)
        ? theme.spacing[pt]
        : pt};
    `}

  /* Apply padding bottom */
  ${({ theme, pb }) =>
    pb &&
    css`
      padding-bottom: ${checkIsPredeterminedSpaceSize(pb)
        ? theme.spacing[pb]
        : pb};
    `}

  /* Apply padding right */
  ${({ theme, pr }) =>
    pr &&
    css`
      padding-right: ${checkIsPredeterminedSpaceSize(pr)
        ? theme.spacing[pr]
        : pr};
    `}

  /* Apply padding left */
  ${({ theme, pl }) =>
    pl &&
    css`
      padding-left: ${checkIsPredeterminedSpaceSize(pl)
        ? theme.spacing[pl]
        : pl};
    `}
`;

export const fontMixin = css`
  /* Apply font size */
  ${({ theme, fontSize }) =>
    fontSize &&
    css`
      font-size: ${checkIsPredeterminedFontSize(fontSize)
        ? theme.typography[`fontSize${fontSize}`]
        : fontSize};
    `}

  /* Apply font weight */
  ${({ theme, fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${checkIsPredeterminedFontWeight(fontWeight)
        ? theme.typography[`fontWeight${kebabCaseToCamelCase(fontWeight)}`]
        : fontWeight};
    `}
  
  /* Transform text to uppercase */
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  /* Apply line height */
  ${(props) =>
    props.lineHeight &&
    css`
      line-height: ${props.lineHeight};
    `}

  /* Align text */
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
`;

export const mediaQueryMixin = css`
  ${({ theme, mq }) =>
    mq &&
    css`
      ${Object.keys(mq).map((label) => {
        return Object.keys(mq[label]).map((value) => {
          return theme.breakpoints[label][value]`
              ${mq[label][value]}
            `;
        });
      })}
    `}
`;

export const alertIconMixin = css`
  margin-right: 10px;
  width: 30px;
  fill: ${({ theme }) => theme.palette.text.primary};
  fill-opacity: 0.6;
`;
