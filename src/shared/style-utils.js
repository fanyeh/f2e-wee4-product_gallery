import pattern from './pattern.svg';
import { css } from 'styled-components';

export const gridArea = (colStart, colSpan, rowStart, rowSpan) => `
  grid-column: ${colStart} / span ${colSpan};
  grid-row: ${rowStart} / span ${rowSpan};
  `;
export const selfAlign = (justify, align) => `
  justify-self: ${justify};
  align-self: ${align};
  `;
export const patternBox = css`
  background-image: url(${pattern});
  background-repeat: repeat-x;
`;
export const border = css`
  border: 20px solid #50e3c2;
  box-sizing: border-box;
`;
export const label = css`
  background: black;
  padding: 0 0.75rem;
  text-transform: uppercase;
  color: white;
  display: inline-block;
`;
export const titleLg = css`
  font-size: 72px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 72px;
  white-space: nowrap;
`;
export const titleSm = css`
  margin: 0;
  transform-origin: bottom left;
  line-height: 21px;
  font-size: 21px;
  font-style: italic;
  white-space: nowrap;
  font-weight: 700;
`;
export const titleMd = css`
  margin: 0;
  font-size: 3rem;
  line-height: 3rem;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: 900;
`;
export const num = css`
  ${titleMd};
`;
export const shadowTitle = css`
  ${titleMd};
  position: relative;
  &:before,
  &:after {
    position: absolute;
    left: 0px;
    overflow: hidden;
    content: attr(name);
  }
  &:before {
    color: rgba(0, 0, 0, 0.3);
    top: -17px;
    height: 45%;
  }
  &:after {
    color: rgba(0, 0, 0, 0.1);
    top: -24px;
    height: 25%;
  }
`;
