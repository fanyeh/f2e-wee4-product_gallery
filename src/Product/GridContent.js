import styled from 'styled-components';
import Grid from './Grid';

const GridContent = Grid.extend`
  height: 400px;
  grid-template-rows: repeat(4, 1fr);
`;

const Caption = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 4;
`;
const Header = styled.div`
  grid-column: 3 / span 5;
  grid-row: 1 / span 1;
`;

const Detail = styled.div`
  grid-column: 3 / span 5;
  grid-row: 2 / span 3;
`;

GridContent.Caption = Caption;
GridContent.Detail = Detail;
GridContent.Header = Header;

export default GridContent;
