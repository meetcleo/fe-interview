// @flow

import React from 'react';

type Props = {
  imgUrl: string,
  altText?: string
};

const iconStyles = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginLeft: '24px'
};

const Icon = ({ imgUrl, altText }: Props) => {
  return (
    <>
      <img src={imgUrl} alt={altText} style={iconStyles} />
    </>
  );
};

export default Icon;
