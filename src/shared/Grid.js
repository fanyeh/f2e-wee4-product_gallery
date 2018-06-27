import styled from 'styled-components';
import { gridArea, selfAlign, titleLg, label } from '../shared/style-utils';

const HomeTitle = styled.div`
  ${selfAlign('center', 'end')};
  ${gridArea(3, 4, 1, 1)};
  ${titleLg};
`;

const HomeLabel = styled.div`
  ${selfAlign('center', 'start')};
  ${gridArea(4, 2, 1, 1)};
  ${label};
`;

const ProductIcon = styled.i`
  color: black;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  ${selfAlign('end', 'center')};
  ${gridArea(1, 1, 1, 1)};
`;
const PorductLabel = styled.div`
  ${selfAlign('start', 'center')};
  ${label};
  ${gridArea(2, 2, 1, 1)};
`;

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  height: 2000px;
  width: 960px;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(8, 1fr);
`;

Grid.HomeTitle = HomeTitle;
Grid.HomeLabel = HomeLabel;
Grid.ProductIcon = ProductIcon;
Grid.ProductLabel = PorductLabel;

export default Grid;
