import { GetStaticProps } from 'next';
import { getRouteData } from '../services/sitecore';

export default function NotFound() {
  return <></>;
}

export const getStaticProps: GetStaticProps = async () => {
  const { sitecore } = await getRouteData('/404');

  return {
    props: {
      sitecore,
    },
    revalidate: 1,
  };
};
