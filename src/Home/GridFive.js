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

const GridFive = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  ${gridArea(1, 6, 13, 4)};
`;
const Title = styled.div`
  ${shadowTitle};
  ${gridArea(1, 3, 1, 1)};
  ${selfAlign('start', 'end')};
`;
const Photo = styled(ImageContainer)`
  ${gridArea(3, 2, 1, 2)};
  & > img {
    width: auto;
    height: 100%;
    z-index: -2;
    transform: rotateY(180deg) translate(10%, -50%);
  }
`;
const BorderBox = styled.div`
  transform: translateY(50%);
  z-index: -3;
  ${border};
  ${gridArea(2, 2, 2, 1)};
`;
const Pattern = styled.div`
  transform: translate(-25%, -50%);
  ${patternBox};
  ${gridArea(2, 2, 1, 1)};
  z-index: -1;
`;
const SubTitle = styled.div`
  ${titleSm};
  ${gridArea(5, 2, 1, 1)};
  ${selfAlign('start', 'start')};
`;
const Num = styled.div`
  ${num};
  ${selfAlign('start', 'end')};
  ${gridArea(2, 1, 2, 1)};
`;

GridFive.Num = Num;
GridFive.Title = Title;
GridFive.SubTitle = SubTitle;
GridFive.Photo = Photo;
GridFive.BorderBox = BorderBox;
GridFive.Pattern = Pattern;

export default GridFive;
