
import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5px;
`;

export const ItemContainer = styled.div`
  border-radius: 5px;
  text-align: center;
  font-size: 28px;
  
  padding: 50px 0px;
  transition: all 0.5s;
  background-color : ${ props => props.bg }
  &:hover {
    font-size : 32px;
    font-weight: bold;
  }
`;


