import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ListContacts from './listContacts';
import CreateContact from './CreateContact';
import * as ContactAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts : [],
  }

  componentDidMount(){
    ContactAPI.getAll()
    .then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })    
    }))

    ContactAPI.remove(contact);

  }



  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts 
             contacts={this.state.contacts}
             onDeleteContact = {this.removeContact}
             ></ListContacts>

        )} />
       
       <Route exact path="/create" component={CreateContact}/>
      
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default App;
