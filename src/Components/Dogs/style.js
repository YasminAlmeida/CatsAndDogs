import styled from 'styled-components';

export const ButtonSearch = styled.button`
  background-color: #88c057;
  border: 0;
  color: #fff;
  width: 50%;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1.125;
  margin-bottom: 30px;
  position: relative;
`;
export const Text = styled.p`
  font-size: 1.5rem;
  color: #525252;
`;
export const ConteinerLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 100px;
`;
export const BigText = styled.h2`
  font-size: 6rem;
  line-height: 1;
  text-transform: uppercase;
  word-break: break-all;
  max-width: 3ch;
  color: #e0e0e0;
`;
export const ConteinerRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;
export const ConteinerDog = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  align-items: center;
`;
