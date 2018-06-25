import Grid from './Grid';
import styled from 'styled-components';
const GridBottom = Grid.extend`
  height: 800px;
  grid-template-rows: repeat(8, 1fr);
`;

const BorderBox = styled.div`
  grid-column: 2 / span 4;
  grid-row: 4 / span 2;
  transform: translate(-25%, -25%);
  border: 20px solid #50e3c2;
  box-sizing: border-box;
`;
const SolidBox = styled.div`
  grid-column: 7 / span 2;
  grid-row: 3 / span 2;
  transform: translateX(-25%);
  background: #50e3c2;
`;
const SlashBox = styled.div`
  grid-column: 3 / span 2;
  grid-row: 8 / span 1;
  transform: translate(-25%, -50%);
  background: #50e3c2;
  z-index: 5;
`;
const ImageContainerSm = styled.div`
  grid-column: 2 / span 3;
  grid-row: 2 / span 3;
  overflow: hidden;
  z-index: 5;
`;
const ImageContainerLg = styled.div`
  grid-column: 4 / span 4;
  grid-row: 4 / span 4;
  overflow: hidden;
  z-index: 4;
`;

GridBottom.BorderBox = BorderBox;
GridBottom.SolidBox = SolidBox;
GridBottom.SlashBox = SlashBox;
GridBottom.ImageContainerSm = ImageContainerSm;
GridBottom.ImageContainerLg = ImageContainerLg;

export default GridBottom;
