import React, { useEffect, useState } from 'react';
import MarkdownWrapper from '../components/MarkdownWrapper';
import readme from '../data/resume.md';



export default () => {
  const [postMarkdown, setPostMarkdown] = useState('');

  GetFileData(setPostMarkdown);

  return (
    <MarkdownWrapper markdownText={postMarkdown} />
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

