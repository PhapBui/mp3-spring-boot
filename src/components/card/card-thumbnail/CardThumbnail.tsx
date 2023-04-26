import * as React from 'react';
import { CardWrapper } from './CardThumbnailStyled';

interface ICardProps {
  title?: string;
  classList?: string;
  thumbnailUrl: string;
}

const CardThumbnail: React.FunctionComponent<ICardProps> = ({
  title,
  classList,
  thumbnailUrl,
}: ICardProps) => {
  return (
    <CardWrapper className={classList} title={title}>
      <img src={thumbnailUrl} alt={thumbnailUrl} />
    </CardWrapper>
  );
};

export default CardThumbnail;
