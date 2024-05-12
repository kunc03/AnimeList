import { Animes } from '@/types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const GetAnimes = (url: string) => {
  const [animes, setAnimes] = useState<any>([]);
  const fetchData = React.useCallback(() => {
    axios({
      method: 'GET',
      url: `${url}`,
    })
      .then((res) => {
        const ApiData = res.data;
        setAnimes(ApiData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return animes;
};

export default GetAnimes;
