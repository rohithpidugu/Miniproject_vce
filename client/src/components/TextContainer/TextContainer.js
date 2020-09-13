import React from 'react';

// import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h5>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h5>
      <h5>Chat with people in this room <span role="img" aria-label="emoji">⬅️</span></h5>
    </div>
    {
      users
        ? (
          <div>
            <h5>People currently chatting:</h5>
            <div className="activeContainer">
              <h6>
                {users.map(({name}) => (
                  <ul key={name} className="activeItem">
                    <li>{name}</li>
                    {/* <img alt="Online Icon" src={onlineIcon}/> */}
                  </ul>
                ))}
              </h6>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;