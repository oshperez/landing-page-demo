import { css } from "styled-components";

export function kebabCaseToCamelCase(string) {
  if (typeof string === "string") {
    return string
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }
}

export function checkIsPredeterminedSpaceSize(size) {
  const spaceSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
  return spaceSizes.includes(size);
}

export function checkIsPredeterminedFontSize(size) {
  const fontSizes = ["200", "300", "400", "500", "600", "700", "800", "900"];
  return fontSizes.includes(size);
}

export function checkIsPredeterminedFontWeight(weight) {
  const fontWeights = ["light", "regular", "medium", "semi-bold", "bold"];
  return fontWeights.includes(weight);
}

export function mediaQueryFactory(breakpoints) {
  const regions = ["down", "up"];

  const query = (region, boundary) => {
    return region === "down"
      ? `@media (max-width: ${breakpoints[boundary]})`
      : region === "up"
      ? `@media (min-width: calc(${breakpoints[boundary]} + 1px))`
      : "";
  };

  const mediaQueries = regions.reduce((acc, region) => {
    acc[region] = Object.keys(breakpoints).reduce((acc, boundary) => {
      acc[boundary] = (...args) => css`
        ${query(region, boundary)} {
          ${css(...args)}
        } ;
      `;
      return acc;
    }, {});
    return acc;
  }, {});

  return mediaQueries;
}