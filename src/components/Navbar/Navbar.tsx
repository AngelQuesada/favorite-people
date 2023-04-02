import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomDialog from '../CustomDialog';
import FavoriteTable from './FavoriteTable';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './style/index.css';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

const Navbar: React.FC = () => {
  const handleClick = (): void => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position='fixed' color='primary'>
        <Toolbar>
          <Typography variant='h6'>Gentleman Programming React Test</Typography>
        </Toolbar>
        <Button
          onClick={handleClick}
          endIcon={<FavoriteIcon />}
          color='secondary'
          variant='contained'
        >
          Open Favorites
        </Button>
      </AppBar>
    </>
  );
};

export default Navbar;
