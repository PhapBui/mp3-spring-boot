import * as React from 'react';
import ListTable from './library-song/ListSong';
import TableHeader from './header';

interface IFavouriteProps {}

const Favourite: React.FunctionComponent<IFavouriteProps> = (props) => {
  return (
    <div style={{ marginTop: 48, marginBottom: 80 }}>
      <TableHeader />
      <ListTable />
    </div>
  );
};

export default Favourite;
