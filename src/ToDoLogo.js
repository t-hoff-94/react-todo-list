import React from 'react';

function ToDoLogo (props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className='tdl-box' viewBox="0 0 555 555">
      <circle className='tdl' fill="none" stroke={props.stroke} strokeWidth="28" strokeMiterlimit="10" cx="277.5" cy="277.5" r="254.5"/>
      <circle className='tdl eye' fill="none" stroke={props.stroke} strokeWidth="13" strokeMiterlimit="10" cx="387" cy="250.9" r="64.2"/>
      <path className='tdl' fill="none" stroke={props.stroke} strokeWidth="18.4051" strokeMiterlimit="10" d="M406.3 362.1c9.6 0 16.8 8.9 14.7 18.3-11.5 51.8-71.1 91.2-142.9 91.2s-131.4-39.4-142.9-91.2c-2.1-9.4 5-18.3 14.7-18.3h256.4z"/>
      <circle className='tdl eye' fill="none" stroke={props.stroke} strokeWidth="13" strokeMiterlimit="10" cx="168" cy="250.9" r="64.2"/>
      <path className='tdl' fill="none" stroke={props.stroke} strokeWidth="12" strokeLinecap="round" strokeMiterlimit="10" d="M277.5 295.8V151.4"/>
      <path className='tdl' fill="none" stroke={props.stroke} strokeWidth="16" strokeLinecap="round" strokeMiterlimit="10" d="M167.4 145h220.2"/></svg>
    );
}

export default ToDoLogo;
