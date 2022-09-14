import styled from 'styled-components';
export const ConteinerDog = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
`;
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
  text-align: end;
`;
export const Text = styled.p`
  font-size: 1.5rem;
  color: #525252;
  text-align: end;
`;
export const Information = styled.p`
  font-size: 1.1rem;
  text-align: end;
`;
export const ConteinerLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 100px;
  justify-items: end;
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

export const ImageDog = styled.img`
  width: 300px;
`;
