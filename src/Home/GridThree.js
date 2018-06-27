import styled from 'styled-components';
import ImageContainer from '../shared/ImageContainer';
import { border, num, gridArea, selfAlign, shadowTitle, titleSm } from '../shared/style-utils';

const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  ${gridArea(1, 5, 8, 4)};
`;
const Title = styled.div`
  z-index: 1;
  ${shadowTitle};
  ${gridArea(2, 3, 1, 1)};
  ${selfAlign('end', 'end')};
`;
const Photo = styled(ImageContainer)`
  ${gridArea(1, 4, 2, 2)};
`;
const BorderBox = styled.div`
  transform: translate(25%, 25%);
  z-index: -5;
  ${border};
  ${gridArea(3, 2, 2, 2)};
`;
const Box = styled.div`
  transform: translateY(25%);
  background: #50e3c2;
  z-index: -5;
  ${gridArea(1, 2, 1, 2)};
`;
const SubTitle = styled.div`
  z-index: 5;
  ${titleSm};
  ${gridArea(1, 2, 4, 1)};
  ${selfAlign('end', 'start')};
`;
const Num = styled.div`
  transform: translateY(100%);
  ${num};
  ${gridArea(5, 1, 3, 1)};
`;

GridThree.Num = Num;
GridThree.Title = Title;
GridThree.SubTitle = SubTitle;
GridThree.Photo = Photo;
GridThree.BorderBox = BorderBox;
GridThree.Box = Box;

export default GridThree;
