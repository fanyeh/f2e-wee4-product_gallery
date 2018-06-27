import styled from 'styled-components';
import { gridArea, selfAlign, border, titleMd } from '../shared/style-utils';
import ImageContainer from '../shared/ImageContainer';

const GridTop = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 1fr);
  ${gridArea(1, 8, 1, 7)};
`;
const TitleTop = styled.div`
  ${titleMd};
  ${selfAlign('end', 'end')};
  ${gridArea(6, 2, 2, 1)};
`;
const TitleRight = styled.div`
  transform-origin: 15% center;
  transform: rotate(90deg) translateY(-250%);
  ${titleMd};
  ${selfAlign('start', 'start')};
  ${gridArea(7, 2, 3, 2)};
`;
const TitleBottom = styled.div`
  transform: rotate(180deg);
  ${titleMd};
  ${selfAlign('start', 'start')};
  ${gridArea(2, 1, 7, 1)};
`;
const TitleLeft = styled.div`
  transform-origin: 63% center;
  transform: rotate(90deg) translateY(5%);
  ${titleMd};
  ${selfAlign('end', 'end')};
  ${gridArea(1, 1, 6, 1)};
`;
const Box = styled.div`
  transform: translate(-25%, -25%);
  background: #50e3c2;
  ${gridArea(2, 2, 3, 2)};
`;
const BorderBox = styled.div`
  transform: translate(12.5%, -25%);
  ${border};
  ${gridArea(4, 4, 6, 2)};
`;
const Photo = styled(ImageContainer)`
  z-index: 5;
  ${gridArea(2, 6, 3, 4)};
`;

GridTop.Box = Box;
GridTop.BorderBox = BorderBox;
GridTop.Photo = Photo;
GridTop.TitleTop = TitleTop;
GridTop.TitleBottom = TitleBottom;
GridTop.TitleLeft = TitleLeft;
GridTop.TitleRight = TitleRight;

export default GridTop;
