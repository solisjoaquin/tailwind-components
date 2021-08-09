import React, { useState, useEffect } from 'react';

const DisplayCode = ({ children, textID }) => {
  const [displayCode, setDisplayCode] = useState(false);
  const [codeString, setCode] = useState([]);

  useEffect(() => {
    for (const property in textID) {
      codeString.push(`${property}: ${textID[property]};\n\n`);
    }
  }, []);

  return (
    <div className="">
      <div className="children-container">{children}</div>
      {displayCode && (
        <div>
          <pre>
            <code>{codeString}</code>
          </pre>
        </div>
      )}
      <button onClick={() => setDisplayCode(!displayCode)}>
       {displayCode? "Hide code" : "Display code"}
      
      </button>
    </div>
  );
};

export default DisplayCode;
