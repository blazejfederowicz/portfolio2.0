const HeroSectionCode = () => {
    return (
      <pre className="text-[0.8125rem]/6 text-gray-300" style={{ tabSize: 2 }}>
        <code>
          {`import `}
          <span className="text-[#7dd3fc]">ButtonComponent</span>
          {` from `}
          <span className="text-emerald-300">'./Buttons/ButtonComponent'</span>
          {`\n\nconst `}
          <span className="text-indigo-400">HeroSection</span>
          {` = ({ `}
          <span className="text-[#7dd3fc]">ctaRef</span>
          {` }) => {\n  const `}
          <span className="text-indigo-400">handleScroll</span>
          {` = () => {\n    if (`}
          <span className="text-[#7dd3fc]">ctaRef</span>
          {`.current) {\n      `}
          <span className="text-[#7dd3fc]">ctaRef</span>
          {`.current.`}
          <span className="text-emerald-300">scrollIntoView</span>
          {`();\n    }\n  };\n\n  return (\n    `}
          &lt;<span className="text-indigo-400">div</span>{` id="`}
          <span className="text-emerald-300">hero</span>
          {`" className="`}
          <span className="text-emerald-300">hero-container</span>
          {`"&gt;\n      `}
          &lt;<span className="text-indigo-400">div</span>{` className="`}
          <span className="text-emerald-300">hero-heading</span>
          {`"&gt;\n        `}
          &lt;<span className="text-indigo-400">div</span>{` className="`}
          <span className="text-emerald-300">hero-content</span>
          {`"&gt;\n          {`}
          <span className="text-gray-500">`/* ... */`</span>
          {`}\n        `}
          &lt;/<span className="text-indigo-400">div</span>&gt;
          {`\n        `}
          &lt;<span className="text-indigo-400">ButtonComponent</span>{`\n          purple="`}
          <span className="text-emerald-300">Get Inspired</span>
          {`"\n          white="`}
          <span className="text-emerald-300">Learn More</span>
          {`"\n          onClickWhite={() => `}
          <span className="text-[#7dd3fc]">handleFilter</span>
          {`()}\n          onClickpurple={`}
          <span className="text-[#7dd3fc]">handleScroll</span>
          {`}\n        /&gt;\n      `}
          &lt;/<span className="text-indigo-400">div</span>&gt;
          {`\n    `}
          &lt;/<span className="text-indigo-400">div</span>&gt;
          {`\n  );\n};`}
        </code>
      </pre>
    );
  };
  
  export default HeroSectionCode;
  