import createTitle from 'shared/components/title/index.js';

export default React => ({ title }) => {
  const Title = createTitle(React);

  return <Title title={ title }/>;
};
