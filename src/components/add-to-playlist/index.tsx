import { icons } from '@/assets';
import { Stack } from '@mui/material';
import * as React from 'react';
import { Action, AddToPlaylistWrapper, AllCheck, MoreAction } from './indexStyled';

interface IAddToPlaylistProps {}

const AddToPlaylist: React.FunctionComponent<IAddToPlaylistProps> = (props) => {
  return (
    <AddToPlaylistWrapper>
      <AllCheck>{icons.checkBox}</AllCheck>
      <Action>
        {icons.addToPlayList}
        <span>thêm vào danh sách phát</span>
      </Action>
      <MoreAction> {icons.moreH}</MoreAction>
    </AddToPlaylistWrapper>
  );
};

export default AddToPlaylist;
