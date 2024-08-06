// src/components/App.js
import React, { useState } from 'react';
import Section from './Section';
import Filter from './Filter';
import '../App.css';

function App() {
    const [sections, setSections] = useState([]);
    const [filter, setFilter] = useState('');

    const addSection = (label) => {
        setSections([...sections, { label, fields: [], tags: [] }]);
    };

    const updateSection = (index, updatedSection) => {
        const newSections = sections.slice();
        newSections[index] = updatedSection;
        setSections(newSections);
    };

    const filteredSections = filter
        ? sections.filter(section => section.tags.includes(filter))
        : sections;

    return (
        <div className="app">
            <h1>Resume Builder</h1>
            <Filter setFilter={setFilter} />
            <button onClick={() => addSection('New Section')}>Add Section</button>
            {filteredSections.map((section, index) => (
                <Section
                    key={index}
                    section={section}
                    updateSection={(updatedSection) => updateSection(index, updatedSection)}
                />
            ))}
        </div>
    );
}

export default App;

