import styled from 'styled-components';
import { gridArea, patternBox, border } from '../shared/style-utils';
import ImageContainer from '../shared/ImageContainer';

const GridBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 1fr);
  ${gridArea(1, 8, 13, 7)};
`;
const BorderBox = styled.div`
  transform: translate(-25%, -25%);
  ${border};
  ${gridArea(2, 4, 4, 2)};
`;
const Box = styled.div`
  transform: translateX(-25%);
  background: #50e3c2;
  ${gridArea(7, 2, 3, 2)};
`;
const Pattern = styled.div`
  transform: translate(-25%, 50%);
  z-index: 5;
  ${patternBox};
  ${gridArea(3, 2, 7, 1)};
`;
const PhotoSm = styled(ImageContainer)`
  z-index: 5;
  ${gridArea(2, 3, 2, 3)};
  & > img {
    width: auto;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
  }
`;
const PhotoLg = styled(ImageContainer)`
  z-index: 4;
  ${gridArea(4, 4, 4, 4)};
`;

GridBottom.BorderBox = BorderBox;
GridBottom.Box = Box;
GridBottom.Pattern = Pattern;
GridBottom.PhotoSm = PhotoSm;
GridBottom.PhotoLg = PhotoLg;

export default GridBottom;
