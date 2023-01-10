import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Photo Store - ${title}`;
  }, []);
};

export default useDocumentTitle;
