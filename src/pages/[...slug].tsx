import { GetStaticPaths, GetStaticProps } from 'next';
import { getRouteData } from '../services/sitecore';

export default function Page() {
  return <></>;
}

export const getStaticProps: GetStaticProps<{}, { slug: string[] }> = async (
  context
) => {
  try {
    const { sitecore } = await getRouteData(context.params.slug.join('/'));

    return {
      props: {
        sitecore,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
