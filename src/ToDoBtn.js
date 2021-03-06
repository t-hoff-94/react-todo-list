import React from 'react';

function ToDoBtn (props) {
    return (
      <svg className='tdl-box tdl' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 529 528.7">
      <circle className='tdl' fill="none" stroke={props.stroke} strokeWidth="17" strokeMiterlimit="10" cx="264.1" cy="264" r="254.5"/>
      <circle className='tdl eye' fill="none" stroke={props.stroke} strokeWidth="17" strokeMiterlimit="10" cx="373.6" cy="237.4" r="64.2"/>
      <path className='tdl' fill="none" stroke={props.stroke} strokeWidth="17" strokeMiterlimit="10" d="M392.9 348.6c9.6 0 16.8 8.9 14.7 18.3-11.5 51.8-71.1 91.2-142.9 91.2s-131.4-39.4-142.9-91.2c-2.1-9.4 5-18.3 14.7-18.3h256.4z"/>
      <circle className='tdl eye' fill="none" stroke={props.stroke} strokeWidth="17" strokeMiterlimit="10" cx="154.6" cy="237.4" r="64.2"/>
      <path className='tdl tbrow' fill={props.stroke} d="M365.7 123H162.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h84.6c4.7 0 8.5 3.8 8.5 8.5v123.3c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5V148.5c0-4.7 3.8-8.5 8.5-8.5h84.6c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5z"/>
      <path className='x-eyes' fill={props.stroke} d="M166.7 237.4L206 198c3.3-3.3 3.3-8.7 0-12-3.3-3.3-8.7-3.3-12 0l-39.4 39.4-39.4-39.4c-3.3-3.3-8.7-3.3-12 0-3.3 3.3-3.3 8.7 0 12l39.4 39.4-39.4 39.4c-3.3 3.3-3.3 8.7 0 12 1.7 1.7 3.8 2.5 6 2.5s4.4-.8 6-2.5l39.4-39.4 39.4 39.4c1.7 1.7 3.8 2.5 6 2.5s4.4-.8 6-2.5c3.3-3.3 3.3-8.7 0-12l-39.3-39.4zM386.3 237.4l39.4-39.4c3.3-3.3 3.3-8.7 0-12-3.3-3.3-8.7-3.3-12 0l-39.4 39.4-39.5-39.4c-3.3-3.3-8.7-3.3-12 0-3.3 3.3-3.3 8.7 0 12l39.4 39.4-39.4 39.4c-3.3 3.3-3.3 8.7 0 12 1.7 1.7 3.8 2.5 6 2.5s4.4-.8 6-2.5l39.4-39.4 39.4 39.4c1.7 1.7 3.8 2.5 6 2.5s4.4-.8 6-2.5c3.3-3.3 3.3-8.7 0-12l-39.3-39.4z"/></svg>
    );
}

export default ToDoBtn;
