import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ListContacts extends Component {
        static propTypes = {
          contacts: PropTypes.array.isRequired,
          onDeleteContact: PropTypes.func.isRequired,
        }

        render (){

          return (
              <ul className="contact-list">
                  {this.props.contacts.map(contact => (
                      <li key={contact.id } 
                        className="contact-list-item">
                        <div className="contact-avatar"
                          style={
                            {backgroundImage: `url(${contact.avatarURL})`}  
                          } >
                        </div>

                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove" 
                        onClick = {() => this.props.onDeleteContact(contact)}></button>
                      </li>    
                  ))}
              </ul>
          )
      }
    
}
export default ListContacts