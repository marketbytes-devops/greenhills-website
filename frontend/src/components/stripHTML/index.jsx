import React from 'react';

const StripHtml = ({ html }) => {
  const strippedText = React.useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }, [html]);

  return <span>{strippedText}</span>;
};

export default StripHtml;