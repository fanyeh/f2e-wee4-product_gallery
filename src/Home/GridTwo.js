import styled from 'styled-components';
import ImageContainer from '../shared/ImageContainer';
import { gridArea, num, selfAlign, shadowTitle, titleSm } from '../shared/style-utils';

const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  ${gridArea(6, 3, 3, 4)};
`;

const Title = styled.div`
  transform: translateY(70px);
  ${shadowTitle};
  ${gridArea(2, 2, 3, 1)};
  ${selfAlign('start', 'end')};
`;
const Photo = styled(ImageContainer)`
  ${gridArea(1, 2, 2, 2)};
`;

const Box = styled.div`
  transform: translate(25%, -25%);
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
    transform: translate(25%, -25%);
    border: 20px solid #50e3c2;
    box-sizing: border-box;
  }
  ${gridArea(1, 2, 2, 2)};
`;

const SubTitle = styled.div`
  transform: translateX(-100%);
  ${titleSm};
  ${selfAlign('start', 'end')};
  ${gridArea(2, 2, 1, 1)};
`;

const Num = styled.div`
  ${selfAlign('end', 'start')};
  ${gridArea(3, 1, 1, 1)};
  ${num};
`;

GridTwo.Num = Num;
GridTwo.Title = Title;
GridTwo.SubTitle = SubTitle;
GridTwo.Photo = Photo;
GridTwo.Box = Box;

export default GridTwo;
