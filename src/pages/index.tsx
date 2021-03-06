import { GetStaticProps } from 'next';
import { getRouteData } from '../services/sitecore';

export default function Home() {
  return <></>;
}

export const getStaticProps: GetStaticProps = async () => {
  const { sitecore } = await getRouteData('/');

  return {
    props: {
      sitecore,
    },
    revalidate: 1,
  };
};
