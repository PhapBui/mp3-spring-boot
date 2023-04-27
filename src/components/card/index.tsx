import { Box } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import CardThumbnail from './card-thumbnail/CardThumbnail';
import ActionOverlay from './overlay/ActionOverlay';

interface ICardProps {
  classList?: 'is-40' | 'is-45' | '100';
}
const thumbnailUrl =
  'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0r1DFvmxYQ43LWSzWpwAem1I03M2Eud_L5DRP8Oxrlq5Mrvcq6E1_LaK02EERyUlKbz2QjOaa-O54WujnsI3h4SINYt2PDEpH0WBBvSoqRD2M0eebsNLjHO8NogIQTVc50aBAyLfpky5LmTjbsA5hKm8J3dUCiZX2naCBfHqoBaB7WnsZtxKl5j1Md6A88Av2HqATDrqWBbP6Gecq2E0lr53M3-BQjIp5n5JTCaZYlX3M08vXMIRk08IHJdNPCouK0X2TDGqoka1NKSbW3JAkbDTGYI1D9wz1GzC8jGomhzA0Lbss7q&size=thumb/240_240';
const Card: React.FunctionComponent<ICardProps> = ({ classList }: ICardProps) => {
  return (
    <div>
      <Link to="/kham-pha">
        <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
          <CardThumbnail thumbnailUrl={thumbnailUrl} title="After School" classList={classList} />
          <ActionOverlay />
        </Box>
      </Link>
    </div>
  );
};

export default React.memo(Card);
