import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 4px solid silver;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
`;
export const Username = styled.p`
  color: white;
  margin-right: 10px;
  font-size: 20px;
`;
