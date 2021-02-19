import { Field, Link as SitecoreLink } from '@sitecore-jss/sitecore-jss-react';
import NextLink from 'next/link';

interface LinkProps {
  className?: string;
  field: Field<{
    href: string;
    linktype: 'internal';
    text: string;
  }>;
}

export const Link = (props: LinkProps) => {
  if (props.field.editable) {
    return <SitecoreLink field={props.field} className={props.className} />;
  }

  return (
    <NextLink href={props.field.value.href}>
      <a className={props.className}>{props.field.value.text}</a>
    </NextLink>
  );
};
