import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    // className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="NaN" y="8" rx="3" ry="3" width="NaN" height="6" />
    <rect x="NaN" y="26" rx="3" ry="3" width="NaN" height="6" />
    <rect x="NaN" y="56" rx="3" ry="3" width="NaN" height="6" />
    <rect x="NaN" y="72" rx="3" ry="3" width="NaN" height="6" />
    <rect x="NaN" y="88" rx="3" ry="3" width="NaN" height="6" />
    <circle cx="NaN" cy="NaN" r="NaN" />
    <rect x="0" y="271" rx="10" ry="10" width="280" height="25" />
    <rect x="72" y="313" rx="0" ry="0" width="0" height="2" />
    <rect x="0" y="316" rx="10" ry="10" width="283" height="86" />
    <rect x="0" y="431" rx="10" ry="10" width="95" height="30" />
    <rect x="127" y="422" rx="20" ry="20" width="152" height="45" />
    <circle cx="140" cy="127" r="125" />
  </ContentLoader>
);

export default Skeleton;
