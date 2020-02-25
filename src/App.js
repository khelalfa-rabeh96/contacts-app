import React, { Component } from 'react';
import ListContacts from './listContacts'
import PropTypes from 'prop-types';

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
       <ListContacts 
       contacts={this.state.contacts}
       onDeleteContact = {this.removeContact}
       ></ListContacts>
       
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default App;
