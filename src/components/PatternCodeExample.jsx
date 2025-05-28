import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * props:
 *   code={{ java: "...", js: "..." }}
 */
export default function PatternCodeExample({ code }) {
  const [lang, setLang] = useState("js");
  return (
    <section className="my-6 rounded-lg bg-gray-900/90 p-4 text-sm text-white">
      <div className="mb-2 flex gap-2">
        <button
          className={`rounded px-2 py-0.5 ${
            lang === "js" ? "bg-brand-red text-white" : "bg-white text-gray-900"
          }`}
          onClick={() => setLang("js")}
        >
          JavaScript
        </button>
        <button
          className={`rounded px-2 py-0.5 ${
            lang === "java"
              ? "bg-brand-red text-white"
              : "bg-white text-gray-900"
          }`}
          onClick={() => setLang("java")}
        >
          Java
        </button>
      </div>
      <SyntaxHighlighter
        language={lang === "js" ? "javascript" : "java"}
        style={vscDarkPlus}
        wrapLongLines
      >
        {code[lang]}
      </SyntaxHighlighter>
    </section>
  );
}
