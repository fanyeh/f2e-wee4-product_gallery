import styled from 'styled-components';
import TitleMd from '../shared/TitleMd';
import TitleSm from '../shared/TitleSm';
import ShadowTitle from '../shared/ShadowTitle';
const GridTwo = styled.div`
  grid-column: 6 / span 3;
  grid-row: 3 / span 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const Title = styled.div`
  grid-column: 2 / span 2;
  grid-row: 4 / span 1;
  & > ${ShadowTitle} {
    transform: translateY(25px);
  }
`;
const ImageContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  overflow: hidden;
`;

const Box = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
  transform: translate(calc(100% / 6), -25%);
  background: #50e3c2;
  z-index: -5;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(21.5%, -25%);
    border: 20px solid #50e3c2;
    box-sizing: border-box;
  }
`;

const SmallTitle = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  justify-self: start;
  align-self: end;
  & > ${TitleSm} {
    transform: translateX(-100%);
  }
`;

const Num = styled.div`
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
  justify-self: end;
  align-self: start;
  /* transform: translateY(100%); */
  & > ${TitleMd} {
    line-height: 3rem;
  }
`;

GridTwo.Title = Title;
GridTwo.Num = Num;
GridTwo.SmallTitle = SmallTitle;
GridTwo.ImageContainer = ImageContainer;
GridTwo.Box = Box;

export default GridTwo;
