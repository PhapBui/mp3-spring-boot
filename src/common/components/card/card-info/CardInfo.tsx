import * as React from 'react';
import { CardInfoWrapper, CardName, Author, TimeRelease, Artist } from './CardInfoStyled';
import { Link } from 'react-router-dom';

interface Ex {
  name: string;
  path: string;
}

interface ICardInfoProps {
  timeRelease?: any;
  item: Ex;
  author?: Ex;
  artist?: Ex;
}

const CardInfo: React.FunctionComponent<ICardInfoProps> = ({
  timeRelease,
  item,
  author,
  artist,
}) => {
  return (
    <CardInfoWrapper>
      <CardName>
        <Link to={item?.path}>{item?.name}</Link>
      </CardName>
      {author && <Author>{author.name}</Author>}
      {artist && (
        <Artist>
          <Link to={artist?.path}>{artist?.name}</Link>
        </Artist>
      )}
      {timeRelease && <TimeRelease>2 ngày trước</TimeRelease>}
    </CardInfoWrapper>
  );
};

export default CardInfo;
