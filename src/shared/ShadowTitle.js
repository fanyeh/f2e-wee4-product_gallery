import styled from 'styled-components';

export default styled.div`
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 2.2rem;
  font-weight: 900;
  position: relative;
  white-space: nowrap;
  &:after {
    content: attr(title);
    color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -24px;
    left: 0;
    z-index: -2;
  }
  &:before {
    content: attr(title);
    color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: -17px;
    left: 0px;
    z-index: -1;
  }
`;
