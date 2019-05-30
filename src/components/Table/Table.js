import React from 'react';

const Table = props => {
  const { displayData } = props
  return (
    <section className='main-table'>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company Name</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Email</th>
            <th>Web</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {displayData && displayData.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.company_name}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zip}</td>
                <td>{user.email}</td>
                <td>{user.web}</td>
                <td>{user.age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;