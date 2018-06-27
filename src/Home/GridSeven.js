import styled from 'styled-components';
import ImageContainer from '../shared/ImageContainer';
import { border, num, gridArea, selfAlign, shadowTitle, titleSm } from '../shared/style-utils';

const GridSeven = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  ${gridArea(1, 4, 16, 5)};
`;
const Title = styled.div`
  z-index: 1;
  ${shadowTitle};
  ${gridArea(3, 2, 2, 1)};
  ${selfAlign('start', 'start')};
  transform-origin: top left;
  transform: rotate(90deg) translateY(-100%);
`;
const Photo = styled(ImageContainer)`
  ${gridArea(1, 2, 2, 4)};
  & > img {
    width: auto;
    height: 100%;
  }
`;
const BorderBox = styled.div`
  transform: translate(25%, -12.5%);
  z-index: -5;
  ${border};
  ${gridArea(1, 2, 2, 4)};
`;
const Box = styled.div`
  transform: translateX(50%);
  background: #50e3c2;
  z-index: -5;
  ${gridArea(1, 2, 4, 2)};
`;
const SubTitle = styled.div`
  z-index: 5;
  ${titleSm};
  ${gridArea(1, 2, 1, 1)};
  ${selfAlign('start', 'end')};
`;
const Num = styled.div`
  ${num};
  ${selfAlign('end', 'end')};
  ${gridArea(3, 1, 5, 1)};
`;

GridSeven.Num = Num;
GridSeven.Title = Title;
GridSeven.SubTitle = SubTitle;
GridSeven.Photo = Photo;
GridSeven.BorderBox = BorderBox;
GridSeven.Box = Box;

export default GridSeven;
