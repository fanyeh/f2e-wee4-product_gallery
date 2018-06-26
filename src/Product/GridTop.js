import styled from 'styled-components';
import Grid from '../shared/Grid';
import Title from '../shared/TitleMd';
const GridTop = Grid.extend`
  height: 800px;
  grid-template-rows: repeat(8, 1fr);
`;

const TitleTop = styled.div`
  grid-column: 6 / span 2;
  grid-row: 2 / span 1;
  justify-self: end;
  align-self: end;
  & > ${Title} {
    margin-bottom: 0.5rem;
  }
`;
const TitleRight = styled.div`
  grid-column: 8 / span 1;
  grid-row: 3 / span 2;
  justify-self: start;
  align-self: start;
  & > ${Title} {
    transform-origin: 15% center;
    transform: rotate(90deg);
    padding-bottom: 0.5rem;
  }
`;
const TitleBottom = styled.div`
  grid-column: 2 / span 1;
  grid-row: 7 / span 1;
  justify-self: start;
  align-self: start;
  & > ${Title} {
    transform: rotate(180deg);
    margin-top: 0.5rem;
  }
`;

const TitleLeft = styled.div`
  grid-column: 1 / span 1;
  grid-row: 6 / span 1;
  justify-self: end;
  align-self: end;
  & > ${Title} {
    transform-origin: 63% center;
    transform: rotate(90deg);
    padding-top: 0.5rem;
  }
`;

const SolidBox = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3 / span 2;
  transform: translate(-25%, -25%);
  background: #50e3c2;
`;
const BorderBox = styled.div`
  grid-column: 6 / span 3;
  grid-row: 6 / span 2;
  transform: translate(calc(100% / -6), -25%);
  border: 20px solid #50e3c2;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  grid-column: 2 / span 6;
  grid-row: 3 / span 4;
  overflow: hidden;
  z-index: 5;
`;
const Icon = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  justify-self: end;
  align-self: center;
`;
const Label = styled.div`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  align-self: center;
`;

GridTop.SolidBox = SolidBox;
GridTop.BorderBox = BorderBox;
GridTop.ImageContainer = ImageContainer;
GridTop.TitleTop = TitleTop;
GridTop.TitleBottom = TitleBottom;
GridTop.TitleLeft = TitleLeft;
GridTop.TitleRight = TitleRight;
GridTop.Icon = Icon;
GridTop.Label = Label;

export default GridTop;
