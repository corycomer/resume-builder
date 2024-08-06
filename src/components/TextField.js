// src/components/TextField.js
import React, { useState } from 'react';

function TextField({ text, updateText }) {
  const [value, setValue] = useState(text);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => updateText(value)}
      placeholder="Text Field"
    />
  );
}

export default TextField;

