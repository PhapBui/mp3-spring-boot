import * as React from 'react';
import { CiSearch } from 'react-icons/ci';
import { SuggestContentItem } from './SearchFormStyled';
import { Typography } from '@mui/material';
interface SuggestItemProps {}

const SuggestItem: React.FunctionComponent<SuggestItemProps> = (props) => {
  const test = () => {
    console.log('click');
  };
  return (
    <SuggestContentItem onClick={test}>
      <CiSearch className="icon" />
      <Typography className="text">không thể say</Typography>
    </SuggestContentItem>
  );
};

export default React.memo(SuggestItem);
