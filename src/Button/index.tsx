import React, { FC } from 'react';
import './index.less';
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}
const Button: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <div className={'biz_dev_dialog'} onClick={onClick}>
      {children}
    </div>
  );
};
export default Button;
