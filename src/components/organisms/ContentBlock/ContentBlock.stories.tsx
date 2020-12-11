import { ContentBlock } from './ContentBlock';

export default {
  title: 'ContentBlock',
};

export const Default = () => {
  return (
    <ContentBlock
      fields={{
        heading: { value: 'heading' },
        content: { value: 'content' },
      }}
    />
  );
};
