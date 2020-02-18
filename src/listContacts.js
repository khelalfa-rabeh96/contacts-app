import React, {Component} from 'react';

class ListContacts extends Component {
    render() {
        const onDeleteContact = this.props.onDeleteContact;
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
                      onClick = {() => onDeleteContact(contact)}></button>
                    </li>    
                ))}
            </ul>
        )
    } 
}
export default ListContacts