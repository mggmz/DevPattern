import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function PatternCard({ title, description, codeJS, codeJava }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition my-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="tabs mb-2">
        <button className="tab tab-active">JavaScript</button>
        <button className="tab">Java</button>
      </div>
      <SyntaxHighlighter language="javascript" style={okaidia}>
        {codeJS}
      </SyntaxHighlighter>
    </div>
  );
}
