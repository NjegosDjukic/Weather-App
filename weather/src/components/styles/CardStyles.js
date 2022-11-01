import styled from 'styled-components';

export const CardsWrap = styled.div`
  display: flex;
  width: inherit;
  justify-content: flex-start;
  margin-top: 30px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border: 2px solid silver;
  border-radius: 20px;
  margin: 0 20px;
  background-color: rgba(255, 255, 255, 0.3);
  flex-grow: 1;
  cursor: pointer;
`;
