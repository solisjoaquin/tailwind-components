import React from 'react';
import './style.css';
import DisplayCode from './DisplayCode';

export default function App() {
  const cssJSON = {
    letterSpacing: '-.025em',
    fontWeight: 800,
    fontSize: '1.875rem',
    lineHeight: '2.25rem'
  };

  const gradientText = {

    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent"
  }


  const buttonStyle = {
    backgroundColor: 'rgba(79,70,229)',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    paddingTop: '.75rem',
    paddingBottom: '.75rem',
    borderRadius: '.375rem',
    fontFamily: 'Inter',
    color: 'rgba(255,255,255)',
    fontWeight: 500
  };
  return (
    <div className="container">
      <DisplayCode textID={cssJSON}>
        <h1 style={cssJSON}>Tailwind without tailwind</h1>
      </DisplayCode>

      <DisplayCode textID={gradientText}>
        <h1 style={gradientText}>Tailwind without tailwind</h1>
      </DisplayCode>

      <DisplayCode textID={buttonStyle}>
        <a style={buttonStyle}>Get Started</a>
      </DisplayCode>
    </div>
  );
}
