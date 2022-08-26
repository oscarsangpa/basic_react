import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

import { Home, Settings } from '@mui/icons-material';

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home/>
    case "SETTINGS":
      return <Settings/>
    default:
      return <Home/>
  }
}

const MenuListItems = ({list}) => {

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(`/${path}`)
  }

  return (
    <List>
      {list.map(({text, path, icon}, index )=>
        (
          <ListItem key={index} button onClick={() => navigateTo(path)}>
            <ListItemIcon>
              {getIcon(icon)}
            </ListItemIcon>
              <ListItemText
                primary={text} />

          </ListItem>
        )
      )}
    </List>
  )

}

export default MenuListItems