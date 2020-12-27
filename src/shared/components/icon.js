// @flow

import React from 'react';

type Props = {
  imgUrl: string,
  altText?: string
};

const Icon = ({ imgUrl, altText }: Props) => {
  return (
    <>
      <img src={imgUrl} alt={altText} />
    </>
  );
};

export default Icon;
