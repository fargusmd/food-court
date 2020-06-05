import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 192 192',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M7 12H9V14H7V12Z" fill={fill} />
    <path d="M7 16H9V18H7V16Z" fill={fill} />
    <path d="M13 12H11V14H13V12Z" fill={fill} />
    <path d="M11 16H13V18H11V16Z" fill={fill} />
    <path d="M17 12H15V14H17V12Z" fill={fill} />
    <path d="M15 16H17V18H15V16Z" fill={fill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 22H5C3.897 22 3 21.103 3 20V6C3 4.897 3.897 4 5 4H7V2H9V4H15V2H17V4H19C20.103 4 21 4.897 21 6V20C21 21.103 20.103 22 19 22ZM19.0001 8L19 6H5V8H19.0001ZM19.0003 10L19.001 20H5V10H19.0003Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
