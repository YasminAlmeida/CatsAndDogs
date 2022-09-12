import React, { useState } from 'react';
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
    <>
      <button
        onClick={() => {
          DogsApi(data);
        }}
      >
        Click
      </button>
      <img
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
    </>
  );
};
export default Cats;
