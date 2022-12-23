import classNames from 'classnames';

const Panel = ({ children, className, ...rest }) => {

  const style = classNames('border rounded p-3 shadow bg-white w-full', className)

  return <div className={style} {...rest}>{children}</div>
};

export default Panel;