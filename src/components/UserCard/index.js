import React from 'react';
import './usercard.scss'
const UserCard = props => {
  const { user } = props
  console.log(user);
  return (
    < section className="detail-wrapper">
      <h3>{user.first_name + ' ' + user.last_name}</h3>
      <div className="user-card_grid">
        <div>
          <span className="title">Company</span>
          <span className="value">{user.company_name}</span>
        </div>
        <div>
          <span className="title">City</span>
          <span className="value">{user.city}</span>
        </div>
        <div>
          <span className="title">State</span>
          <span className="value">{user.state}</span>
        </div>
        <div>
          <span className="title">ZIP</span>
          <span className="value">{user.zip}</span>
        </div>
        <div>
          <span className="title">Email</span>
          <span className="value">{user.email}</span>
        </div>
        <div>
          <span className="title">Web</span>
          <span className="value">{user.web}</span>
        </div>
        <div>
          <span className="title">Age</span>
          <span className="value">{user.age}</span>
        </div>
      </div>
    </section>
  );
};



export default UserCard;