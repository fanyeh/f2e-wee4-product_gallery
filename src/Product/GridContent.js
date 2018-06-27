import styled from 'styled-components';
import { gridArea, titleSm } from '../shared/style-utils';
const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  ${gridArea(1, 8, 9, 4)};
`;

const Caption = styled.div`
  transform: rotate(90deg) translate(-41.5%, -41.5%);
  ${titleSm};
  ${gridArea(1, 2, 1, 1)};
`;
const Header = styled.div`
  ${gridArea(3, 5, 1, 1)};
`;

const Detail = styled.div`
  ${gridArea(3, 5, 2, 3)};
  line-height: 1.5rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  line-height: 2.2rem;
  text-transform: uppercase;
  white-space: nowrap;
`;
const SubTitle = styled.h4`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
`;

GridContent.Caption = Caption;
GridContent.Detail = Detail;
GridContent.Header = Header;
GridContent.Header.Title = Title;
GridContent.Header.SubTitle = SubTitle;

export default GridContent;
