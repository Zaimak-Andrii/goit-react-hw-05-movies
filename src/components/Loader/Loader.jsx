import { Box } from '@mui/material';
import { RiseLoader } from 'react-spinners';

export default function Loader(props) {
  return (
    <Box {...props}>
      <RiseLoader
        size={10}
        color="#1976d2"
        cssOverride={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      />
    </Box>
  );
}
