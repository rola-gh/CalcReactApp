import React from 'react';
import './button.css';

const Button =({content ,type ,onClick}) => {
    return (
        <div onClick={onClick(content)} className={`Button ${content==='0'? 'zero' :''} ${type||''}`}>{content}</div>
    );
};

export default Button;
