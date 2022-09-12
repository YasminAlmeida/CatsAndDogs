import React, { useState } from 'react';
import axios from 'axios';
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
        src={data}
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
export default Dogs;
