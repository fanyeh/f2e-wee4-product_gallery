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

const GridFour = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  ${gridArea(5, 4, 8, 5)};
`;
const Title = styled.div`
  z-index: 1;
  transform: rotate(-90deg);
  transform-origin: bottom right;
  ${shadowTitle};
  ${gridArea(1, 2, 1, 1)};
  ${selfAlign('end', 'end')};
`;
const Photo = styled(ImageContainer)`
  ${gridArea(3, 2, 2, 4)};
  & > img {
    width: auto;
    height: 100%;
  }
`;
const BorderBox = styled.div`
  transform: translateX(-25%);
  z-index: -5;
  ${border};
  ${gridArea(3, 2, 1, 2)};
`;
const Pattern = styled.div`
  transform: translateY(50%);
  ${patternBox};
  ${gridArea(3, 2, 5, 1)};
`;
const SubTitle = styled.div`
  z-index: 5;
  ${titleSm};
  ${selfAlign('end', 'center')};
  ${gridArea(3, 2, 1, 1)};
  transform-origin: center 75%;
  transform: rotate(90deg) translateX(-18%);
`;
const Num = styled.div`
  transform: translateY(100%);
  ${num};
  ${selfAlign('end', 'start')};
  ${gridArea(2, 1, 5, 1)};
`;

GridFour.Num = Num;
GridFour.Title = Title;
GridFour.SubTitle = SubTitle;
GridFour.Photo = Photo;
GridFour.BorderBox = BorderBox;
GridFour.Pattern = Pattern;

export default GridFour;
