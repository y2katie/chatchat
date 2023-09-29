import React, { Component, useState } from 'react';
import { Grid, Menu, Segment, Button } from 'semantic-ui-react';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'bio', user: "false" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  onSignIn = (e, {signedIn}) => this.setState({user:signedIn})

  render() {
    const { activeItem, user } = this.state


    // const googleSignIn = () => {
    //   setUser(true);
    // }
  
    // const signOut = () => {
    //   setUser(false);
    // }

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
            />
            
            {user ? (
                <Button onClick={this.onSignIn} active={user==="true"}> Sign out </Button>

            ) : (
                <Button onClick={this.onSignIn}> Sign In </Button>

            )}
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}