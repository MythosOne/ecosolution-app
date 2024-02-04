import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSpinner>
      <TailSpin
        height="50"
        width="50"
        color="#97d28b"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </LoaderSpinner>
  );
};
