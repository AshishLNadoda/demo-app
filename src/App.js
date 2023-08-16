
import "./App.css";
import { useState } from 'react';

import { marked } from 'marked';





function App() 
  {
    const [markdownContent, setMarkdownContent] = useState('');
  
    const handleMarkdownChange = (event) => {
      setMarkdownContent(event.target.value);
    };
 
  return (
    
    <div className="App">
    {<h1>Markdown Editor</h1> }
    <div className="editor">
      <textarea
        value={markdownContent}
        onChange={handleMarkdownChange}
        rows={15}
        cols={50}
      />
    </div>
    <div className="preview">
      { <h2>Preview</h2> }
      <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
    </div>
  </div>
      
   
  );
}

export default App;