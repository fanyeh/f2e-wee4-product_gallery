import styled from 'styled-components';
import ImageContainer from '../shared/ImageContainer';
import {
  patternBox,
  border,
  num,
  gridArea,
  selfAlign,
  shadowTitle,
  titleSm,
} from '../shared/style-utils';

const GridOne = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  ${gridArea(1, 4, 3, 4)};
`;
const Title = styled.div`
  z-index: 1;
  ${shadowTitle};
  ${gridArea(1, 3, 1, 1)};
  ${selfAlign('start', 'start')};
  transform: translateY(-25%);
`;
const Photo = styled(ImageContainer)`
  ${gridArea(1, 4, 1, 4)};
`;
const BorderBox = styled.div`
  transform: translate(25%, -25%);
  z-index: -5;
  ${border};
  ${gridArea(3, 2, 1, 2)};
`;
const Pattern = styled.div`
  transform: translate(25%, 50%);
  ${patternBox};
  ${gridArea(1, 2, 4, 1)};
`;
const SubTitle = styled.div`
  transform-origin: top left;
  transform: rotate(90deg) translateY(-40%);
  z-index: 5;
  ${titleSm};
  ${gridArea(4, 1, 3, 1)};
`;
const Num = styled.div`
  transform: translateY(100%);
  ${num};
  ${selfAlign('start', 'end')};
  ${gridArea(1, 1, 4, 1)};
`;

GridOne.Num = Num;
GridOne.Title = Title;
GridOne.SubTitle = SubTitle;
GridOne.Photo = Photo;
GridOne.BorderBox = BorderBox;
GridOne.Pattern = Pattern;

export default GridOne;
