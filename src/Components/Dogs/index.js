import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style.js';
const Dogs = () => {
  const [data, setData] = useState(null);
  const [isLoad, setisLoad] = useState(false);
  const API = 'https://dog.ceo/api/breeds/image/random';
  const DogsApi = () => {
    axios
      .get(API)
      .then((r) => {
        setData(r.data.message);
      })
      .catch((error) => {
        console.log('Não foi encontrado o resultado esperado', error);
      });
  };

  return (
    <S.ConteinerDog>
      <S.ConteinerLeft>
        <S.Title>Random dog pictures</S.Title>
        <S.Text>Click on the button for see pictures</S.Text>
        <S.ButtonSearch
          onClick={() => {
            DogsApi(data);
          }}
        >
          Click
        </S.ButtonSearch>
        <S.Information>
          “The greatest pleasure of a dog is that you may make a fool of
          yourself with him and not only will he not scold you, but he will make
          a fool of himself too.” – Samuel Butler
        </S.Information>
        <S.Information>
          “A dog is the only thing on earth that loves you more than he loves
          himself.” – Josh Billings
        </S.Information>
      </S.ConteinerLeft>
      <S.ConteinerRight>
        <figure>
          <S.ImageDog
            style={isLoad ? {} : { display: 'none' }}
            src={data}
            onLoad={() => {
              setisLoad(true);
            }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
            }}
            alt="rondom dog"
          />
        </figure>
        <S.BigText>DOGS</S.BigText>
      </S.ConteinerRight>
    </S.ConteinerDog>
  );
};
export default Dogs;
