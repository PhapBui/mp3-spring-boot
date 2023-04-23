import * as React from 'react';
import { Link } from 'react-router-dom';
import { Authors, Content, ItemWrapper, Thumbnail } from './SectionItemStyled';
import ActionOverlay from '../card/ActionOverlay';

interface ISectionItemProps {
  data: {
    id: number;
    thumbnailUrl: string;
    name: string;
    author?: string[];
  };
  numberColumn?: number;
}

const SectionItem: React.FunctionComponent<ISectionItemProps> = ({
  data,
  numberColumn = 6,
}: ISectionItemProps) => {
  return (
    <ItemWrapper
      sx={{
        flexBasis: `${100 / numberColumn}%`,
        width: `${100 / numberColumn}%`,
        maxWidth: `${100 / numberColumn}%`,
      }}
    >
      <div className="wrapper">
        <div className="card">
          <Thumbnail className="thumbnail">
            <Link to="/kham-pha">
              <figure className="image is-48x48">
                <img src={data.thumbnailUrl} alt="" />
              </figure>
            </Link>
            <ActionOverlay />
          </Thumbnail>
          <Content className="title">
            <Link to="/kham-pha">{data.name}</Link>
          </Content>

          {data.author && data.author.length > 0 && (
            <Authors className="author">
              {data.author.map((author) => (
                <Link to="/kham-pha" key={author}>
                  {author}
                </Link>
              ))}
            </Authors>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
};

export default SectionItem;
