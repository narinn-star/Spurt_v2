import axios from 'axios';
import credentials from 'next-auth/providers/credentials';
import { getSession, signIn } from 'next-auth/react';

const client = () => {
  const defaultOptions = {
    baseURL: 'https://alpha.spurtapp.com',
    withCredentials: true,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((request) => {
    // const session = await getSession();
    // if (session) {
    //   request.headers.Authorization = `Bearer ${session.access_token}`;
    // }
    return request;
  });

  instance.interceptors.response.use(
    async (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401)
        window.location.href = '/signin';
      return Promise.reject(error);
    }
  );

  return instance;
};

export default client();
