import { GetServerSideProps } from 'next';
import { readRequestBodyAsJson } from '@sitecore-jss/sitecore-jss-rendering-host/dist/ssrMiddleware';

export default function Preview() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { previewData, previewToken } = await readRequestBodyAsJson(
    context.req
  );

  if (previewToken === process.env.PREVIEW_TOKEN && previewData?.sitecore) {
    return {
      props: {
        sitecore: previewData.sitecore,
      },
    };
  }

  return {
    notFound: true,
  };
};
