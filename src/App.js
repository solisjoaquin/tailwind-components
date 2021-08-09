import React from 'react';
import './style.css';
import DisplayCode from './DisplayCode';

export default function App() {
  const TailwindFont = {
    letterSpacing: '-.025em',
    fontWeight: 800,
    fontSize: '1.875rem',
    lineHeight: '2.25rem'
  };

  const TailwindFont2 = {
    color: 'red',
    letterSpacing: '-.025em',
    fontWeight: 800,
    fontSize: '1.875rem',
    lineHeight: '2.25rem'
  };

  const textID =
    '{"lineHeight":"2.25rem", "letterSpacing":"-.025em", "fontWeight":"800"}';

  const mystyle = JSON.parse(textID);
  return (
    <div className="container">
      <DisplayCode textID={TailwindFont}>
        <h1 style={mystyle}>Tailwind without tailwind</h1>
      </DisplayCode>
    </div>
  );
}
