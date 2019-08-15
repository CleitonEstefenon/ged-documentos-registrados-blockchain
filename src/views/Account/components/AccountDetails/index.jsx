import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, IconButton, InputAdornment, Tooltip } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';
import { VisibilityOff, Visibility } from '@material-ui/icons';


class Account extends Component {
  state = {
    userName: '',
    email: '',
    publicKey: '',
    privateKey: '',
    wif: '',
    address: '',
    visibilityPrivateKey: false
  };

  handleChange = (fieldName, value) => {
    const newState = { ...this.state };
      newState[fieldName] = value;
      this.setState(newState);
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { userName, email, publicKey, privateKey, wif, address, visibilityPrivateKey } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <React.Fragment>
        <Portlet
          {...rest}
          className={rootClassName}
        >
          <PortletHeader>
            <PortletLabel
              title="Informações sobre o usuário"
            />
          </PortletHeader>
          <PortletContent noPadding>
            <form
              autoComplete="off"
              noValidate
            >
              <div className={classes.field}>
                <TextField
                  className={classes.textField}
                  label="Nome do usuário"
                  margin="dense"
                  disabled
                  value={userName}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  label="Email do usuário"
                  margin="dense"
                  value={email}
                  variant="outlined"
                  disabled
                />
              </div>
            </form>
          </PortletContent>
        </Portlet>
        <Portlet
          {...rest}
          className={rootClassName}
        >
          <PortletHeader>
            <PortletLabel
              title="Informações sobre a carteira"
            />
          </PortletHeader>
          <PortletContent noPadding>
            <form
              autoComplete="off"
              noValidate
            >
              <div className={classes.field}>
                <TextField
                  className={classes.textField}
                  label="Chave pública"
                  margin="dense"
                  value={publicKey}
                  variant="outlined"
                  onChange = {event => this.handleChange("publicKey", event.target.value)}
                />
                <TextField
                  //id="outlined-adornment-password"
                  margin="dense"
                  className={classes.textField}
                  variant="outlined"
                  type={visibilityPrivateKey ? 'text' : 'password'}
                  label="Chave privada"                 
                  value={privateKey}
                  onChange = {event => this.handleChange("privateKey", event.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                          onClick={() => this.setState({ ...this.state, visibilityPrivateKey: !visibilityPrivateKey })}
                          onMouseDown={event => event.preventDefault}
                        >
                          {visibilityPrivateKey ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.textField}
                  label="WIF"
                  margin="dense"
                  value={wif}
                  onChange = {event => this.handleChange("wif", event.target.value)}
                  variant="outlined"
                />
                <Tooltip title="Endereço da sua carteira digital">
                  <TextField
                    className={classes.textField}
                    label="Endereço"
                    margin="dense"
                    value={address}
                    onChange = {event => this.handleChange("address", event.target.value)}
                    variant="outlined"
                  //helperText="Endereço da sua carteira digital"
                  />
                </Tooltip>
              </div>
            </form>
          </PortletContent>
          <PortletFooter>
            <Button
              className={classes.signInButton}
              color="primary"
              disabled={false}
              onClick={this.handleSignUp}           
              variant="contained"
            >
              Salvar            
            </Button>
          </PortletFooter>
        </Portlet>
      </React.Fragment>
    );
  }
}

Account.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
