import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from 'src/config/constants';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
interface Props {
  window?: () => Window;
}

const drawerWidth = '100%';

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'  }}>
      <Box sx={{display:'flex' , justifyContent:'space-between' ,alignItems:'center' ,paddingX:'20px'}}>
      <Box sx={{display:'flex' , alignItems:'center'}}>
      <AllInclusiveIcon/>
        <Typography variant="h6" sx={{ my: 2 , marginLeft:1 }}>
        Atambaev
      </Typography>
      </Box>
      <CloseIcon/>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.route} onClick={() => router.push(item.route)} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  sx={{ display: 'flex' ,  }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor:'white'}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }  , background:'#ca889a'}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
                  <Box sx={{display:'flex' , alignItems:'center'}}>
      <AllInclusiveIcon/>
        <Typography variant="h6" sx={{ my: 2 , marginLeft:1  , color:'black' , fontFamily:'cursive'}}>
        Atambaev
      </Typography>
      </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.route} onClick={() => router.push(item.route)} sx={{ color: 'black' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>

      </Box>
    </Box>
  );
}