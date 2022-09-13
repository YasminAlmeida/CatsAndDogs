import React, { useState } from 'react';
import * as S from './style.js';
import axios from 'axios';

const Cats = () => {
  const [data, setData] = useState({});
  const [isLoad, setisLoad] = useState(false);
  const API = 'https://api.thecatapi.com/v1/images/search';
  const DogsApi = () => {
    axios
      .get(API, {
        headers: {
          'x-api-key': `{live_6BEtxptm6jBmXNalqQN86zTw703w8pper7TfdbMOZs6wFh7n9TepvkeM9WypxNGI}`,
        },
      })
      .then((r) => {
        setData(r.data[0]);
      })
      .catch((error) => {
        console.log('Não foi encontrado o resultado esperado', error);
      });
  };

  return (
    <S.ConteinerCat>
      <S.ConteinerLeft>
        <S.Title>Random cat pictures</S.Title>
        <S.Text>Click on the button for see pictures</S.Text>
        <S.ButtonSearch
          onClick={() => {
            DogsApi(data);
          }}
        >
          Click
        </S.ButtonSearch>
        <p>
          “In ancient times cats were worshipped as gods; they have not
          forgotten this.” – Terry Pratchett
        </p>
        <p>
          “I had been told that the training procedure with cats was difficult.
          It’s not. Mine had me trained in two days.” – Bill Dana
        </p>
      </S.ConteinerLeft>
      <S.ConteinerRight>
        <figure>
          <S.ImageCat
            style={isLoad ? {} : { display: 'none' }}
            src={data.url || ''}
            onLoad={() => {
              setisLoad(true);
            }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
            }}
            alt="rondom dog"
          />
        </figure>
        <S.BigText>CATS</S.BigText>
      </S.ConteinerRight>
    </S.ConteinerCat>
  );
};
export default Cats;
