import { Field, Text } from '@sitecore-jss/sitecore-jss-react';
import { Link } from '../../atoms/Link';

interface LinkProps {
  href: string;
  linktype: 'internal';
  text: string;
}

interface GroupedContentListProps {
  fields: {
    children: Array<{
      id: string;
      fields: {
        link1: Field<LinkProps>;
        link2: Field<LinkProps>;
        title: Field<string>;
      };
    }>;
    footerLink: Field<LinkProps>;
    heading: Field<string>;
    headingLevel: Field<string>;
  };
}

export const GroupedContentList = (props: GroupedContentListProps) => {
  return (
    <section className="container mx-auto">
      <Text
        field={props.fields.heading}
        tag={props.fields.headingLevel.value}
        className="font-bold"
      />
      <div className="grid grid-cols-3">
        {props.fields.children.map((service) => {
          return (
            <div key={service.id}>
              <Text
                field={service.fields.title}
                tag="h3"
                className="font-bold"
              />
              <ul>
                <li>
                  <Link
                    field={service.fields.link1}
                    className="hover:underline"
                  />
                </li>
                <li>
                  <Link
                    field={service.fields.link2}
                    className="hover:underline"
                  />
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <Link field={props.fields.footerLink} className="hover:underline" />
    </section>
  );
};
