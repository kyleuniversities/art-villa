/**
 * Utility component for generating multiple line breaks concisely
 */
export const MultilineBreak = ({ lines }) => {
  const breakList = [];
  for (let i = 0; i < lines; i++) {
    breakList.push(<br></br>);
  }
  return <>{breakList}</>;
};
