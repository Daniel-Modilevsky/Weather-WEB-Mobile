import React from 'react'
import { func, string } from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const Toggle = ({ theme, toggleTheme }) => {

  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    toggleTheme();
  };

  return (
    <>
    <span style={{marginRight:10}}>Dark</span>
     <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="Secondary"
          />
        }
        label="Light"
      />
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;