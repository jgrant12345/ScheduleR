import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';



// Developer's Notes
// The way this works is that we are extracting the text that is selected from the handclose method

interface menuOptionProps{
  deleteItem : (deleteItemIndex: Number) => void;
  index: Number;
}

interface optionElements{
  DisplayName: string,
  key: string,
  invoke: (index: Number) => void // Invoke a specific function that will apply to a specific todolist item
}
const ITEM_HEIGHT = 48;

export default function LongMenu( {deleteItem, index} : menuOptionProps) {
  const options : optionElements[] = [{DisplayName: 'Edit', key: 'Edit', invoke: () => console.log(1)}, {DisplayName: 'Delete', key: 'Delete', invoke: deleteItem}]
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e :  any, index: Number, invoke: (index: Number) => void) => {
    setAnchorEl(null);
    invoke(index)
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option,index) => (
          <MenuItem key={option.DisplayName} selected={option.DisplayName === 'Pyxis'} onClick={(e) => handleClose(e, index, option.invoke)}>
            {option.DisplayName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}