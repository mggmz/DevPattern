import React, { useState } from 'react';

export default function CodeToggle({ code }) {
  const [lang, setLang] = useState('js');
  return (
    <div>
      <div className="mb-2">
        <button
          onClick={() => setLang('js')}
          className={lang === 'js' ? 'underline' : 'mr-2'}
        >
          JavaScript
        </button>
        <button
          onClick={() => setLang('java')}
          className={lang === 'java' ? 'underline' : ''}
        >
          Java
        </button>
      </div>
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
        <code>{code[lang]}</code>
      </pre>
    </div>
  );
}