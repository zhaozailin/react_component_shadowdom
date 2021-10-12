import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
  const { children, root, onClick } = props;
  return ReactDOM.createPortal(<a onClick={onClick}>{children}</a>, root);
}