import styled from 'styled-components';
import pattern from '../shared/pattern.svg';
import TitleMd from '../shared/TitleMd';
import TitleSm from '../shared/TitleSm';
const GridOne = styled.div`
  grid-column: 1 / span 4;
  grid-row: 3 / span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const Title = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
`;
const ImageContainer = styled.div`
  grid-column: 1 / span 4;
  grid-row: 1 / span 4;
  overflow: hidden;
`;
const BorderBox = styled.div`
  grid-column: 3 / span 2;
  grid-row: 1 / span 2;
  border: 20px solid #50e3c2;
  transform: translate(25%, -25%);
  z-index: -5;
`;

const Pattern = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4 / span 1;
  transform: translate(25%, 50%);
  background-image: url(${pattern});
  background-repeat: repeat-x;
`;
const SmallTitle = styled.div`
  grid-column: 4 / span 1;
  grid-row: 4 / span 1;
  & > ${TitleSm} {
    transform-origin: top left;
    transform: translateX(117%) rotate(90deg);
  }
`;
const Num = styled.div`
  grid-column: 1 / span 1;
  grid-row: 4 / span 1;
  justify-self: start;
  align-self: end;
  transform: translateY(100%);
  & > ${TitleMd} {
    line-height: 3rem;
  }
`;

GridOne.Title = Title;
GridOne.ImageContainer = ImageContainer;
GridOne.BorderBox = BorderBox;
GridOne.Pattern = Pattern;
GridOne.Num = Num;
GridOne.SmallTitle = SmallTitle;

export default GridOne;
