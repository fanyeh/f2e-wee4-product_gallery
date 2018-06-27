import styled from 'styled-components';
import ImageContainer from '../shared/ImageContainer';
import { border, num, gridArea, selfAlign, shadowTitle, titleSm } from '../shared/style-utils';
const GridSix = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  ${gridArea(4, 5, 14, 5)};
`;
const Title = styled.div`
  z-index: 1;
  ${shadowTitle};
  ${gridArea(2, 4, 1, 1)};
  ${selfAlign('end', 'end')};
`;
const Photo = styled(ImageContainer)`
  ${gridArea(2, 4, 2, 4)};
`;
const BorderBox = styled.div`
  transform: translateY(25%);
  z-index: -5;
  ${border};
  ${gridArea(2, 4, 4, 2)};
`;

const Box = styled.div`
  transform: translateX(-50%);
  background: #50e3c2;
  z-index: -5;
  ${gridArea(2, 1, 4, 2)};
`;

const SubTitle = styled.div`
  z-index: 5;
  ${titleSm};
  ${gridArea(3, 2, 6, 1)};
  ${selfAlign('center', 'start')};
`;
const Num = styled.div`
  ${num};
  ${selfAlign('end', 'end')};
  ${gridArea(1, 1, 3, 1)};
`;

GridSix.Num = Num;
GridSix.Title = Title;
GridSix.SubTitle = SubTitle;
GridSix.Photo = Photo;
GridSix.BorderBox = BorderBox;
GridSix.Box = Box;

export default GridSix;
