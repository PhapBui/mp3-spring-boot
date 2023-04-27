import * as React from 'react';
import { AddToPlaylistButton, AddToPlaylistWrapper } from './AddToPlaylistStyled';
import { Typography } from '@mui/material';
import { GrFormAdd } from 'react-icons/gr';

interface AddToPlaylistProps {}

const AddToPlaylist: React.FunctionComponent<AddToPlaylistProps> = (props) => {
  return (
    <AddToPlaylistWrapper>
      <AddToPlaylistButton>
        <GrFormAdd />
        <Typography>Add to playlist</Typography>
      </AddToPlaylistButton>
    </AddToPlaylistWrapper>
  );
};

export default React.memo(AddToPlaylist);
