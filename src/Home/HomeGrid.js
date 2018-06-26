import styled from 'styled-components';
import Grid from '../shared/Grid';
import GridLabel from './GridLabel';
import GridTitle from './GridTitle';

const HomeGrid = Grid.extend`
  height: 2000px;
  grid-template-rows: repeat(20, 1fr);
`;

HomeGrid.Label = GridLabel;
HomeGrid.Title = GridTitle;

export default HomeGrid;
