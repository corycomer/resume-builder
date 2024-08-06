// src/components/Section.js
import React, { useState } from 'react';
import TextField from './TextField';

function Section({ section, updateSection }) {
  const [label, setLabel] = useState(section.label);
  const [fields, setFields] = useState(section.fields);
  const [tags, setTags] = useState(section.tags);

  const addField = () => {
    setFields([...fields, '']);
  };

  const updateField = (index, text) => {
    const newFields = fields.slice();
    newFields[index] = text;
    setFields(newFields);
  };

  const saveSection = () => {
    updateSection({ label, fields, tags });
  };

  return (
    <div className="section">
      <input
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onBlur={saveSection}
        placeholder="Section Label"
      />
      <div className="fields">
        {fields.map((field, index) => (
          <TextField
            key={index}
            text={field}
            updateText={(text) => updateField(index, text)}
          />
        ))}
      </div>
      <button onClick={addField}>Add Field</button>
      <div className="tags">
        <input
          value={tags.join(', ')}
          onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
          onBlur={saveSection}
          placeholder="Tags (comma separated)"
        />
      </div>
    </div>
  );
}

export default Section;

