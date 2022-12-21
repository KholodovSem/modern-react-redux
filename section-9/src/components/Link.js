import React, { useContext } from 'react';
import classNames from 'classnames';
import { NavigationContext } from '../context/navigation';

const Link = ({ children, to, className, activeClassName }) => {
  const { currentPath, navigate } = useContext(NavigationContext);

  const activeLinkStyle = (currentPath === to) && activeClassName;

  const style = classNames('text-blue-500', activeLinkStyle, className);

  const handleClick = (e, path) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    navigate(path)
  };

  return <a className={style} onClick={(e) => handleClick(e, to)} href={to}>{children}</a>
}

export default Link;