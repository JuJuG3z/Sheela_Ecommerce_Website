import React, { useState } from 'react';
import styled from 'styled-components';

const ImageFallback = ({ src, alt, className, ...props }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Wrapper className={className}>
      {loading && <div className="loading-spinner">Loading...</div>}
      <img
        src={error ? '/images/placeholder.png' : src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: loading ? 'none' : 'block' }}
        {...props}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageFallback;