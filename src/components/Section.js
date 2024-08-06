// src/components/Section.js
import React, { useState, useEffect } from 'react';
import TextField from './TextField';

function Section({ section, updateSection }) {
    const [label, setLabel] = useState(section.label);
    const [fields, setFields] = useState(section.fields);
    const [tags, setTags] = useState(section.tags);

    useEffect(() => {
        setLabel(section.label);
        setFields(section.fields);
        setTags(section.tags);
    }, [section]);

    const addField = () => {
        const newFields = [...fields, ''];
        setFields(newFields);
        saveSection(newFields, tags);
    };

    const updateField = (index, text) => {
        const newFields = [...fields];
        newFields[index] = text;
        setFields(newFields);
        saveSection(newFields, tags);
    };

    const saveSection = (newFields, newTags) => {
        updateSection({
            label,
            fields: newFields,
            tags: newTags
        });
    };

    return (
        <div className="section">
            <input
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                onBlur={() => saveSection(fields, tags)}
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
                    onBlur={() => saveSection(fields, tags)}
                    placeholder="Tags (comma separated)"
                />
            </div>
        </div>
    );
}

export default Section;
