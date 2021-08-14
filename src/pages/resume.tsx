import React, { useEffect, useState } from 'react';
import MarkdownWrapper from '../components/MarkdownWrapper';
import readme from '../data/resume.md';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism/index'


export default () => {
  const [postMarkdown, setPostMarkdown] = useState('');

  GetFileData(setPostMarkdown);

  return (
    <MarkdownWrapper>
      <SyntaxHighlighter
        style={a11yDark}
        language={"markdown"}
        customStyle={{ width: '100%', margin: '0.2em 0px', padding: '1em 0em' }}
        showLineNumbers={true}
      >{postMarkdown}</SyntaxHighlighter>
    </MarkdownWrapper>
  )
}

function GetFileData(setPostMarkdown: React.Dispatch<React.SetStateAction<string>>) {
  useEffect(() => {
    const loadData = async () => {
      fetch(readme)
        .then((response) => response.text())
        .then((text) => {
          setPostMarkdown(text);
        });
    };

    loadData();
  }, []);
}

