import React from 'react';
import './table.scss'




const Table = props => {
  const { displayData } = props
  return (
    <section className='main-table'>
      <table className="u-full-width">
        <colgroup>
          <col className="first_name" />
          <col className="last_name" />
          <col className="company_name" />
          <col className="city" />
          <col className="state" />
          <col className="zip" />
          <col className="email" />
          <col className="web" />
          <col className="age" />
        </colgroup>
        <thead>
          <tr>
            <th onClick={() => { props.onSort('first_name') }}>First Name <span className={props.setArrow('first_name')}></span></th>
            <th onClick={() => { props.onSort('last_name') }}>Last Name <span className={props.setArrow('last_name')}></span></th>
            <th onClick={() => { props.onSort('company_name') }}>Company Name <span className={props.setArrow('company_name')}></span></th>
            <th onClick={() => { props.onSort('city') }}>City <span className={props.setArrow('city')}></span></th>
            <th onClick={() => { props.onSort('state') }}>State <span className={props.setArrow('state')}></span></th>
            <th onClick={() => { props.onSort('zip') }}>Zip <span className={props.setArrow('zip')}></span></th>
            <th onClick={() => { props.onSort('email') }}>Email <span className={props.setArrow('email')}></span></th>
            <th onClick={() => { props.onSort('web') }}>Web <span className={props.setArrow('web')}></span></th>
            <th onClick={() => { props.onSort('age') }}>Age <span className={props.setArrow('age')}></span></th>
          </tr>
        </thead>
        <tbody>
          {displayData && displayData.map(user => {
            return (
              <tr key={user.id} onClick={() => props.handleDisplay(user.id)}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.company_name}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zip}</td>
                <td>{user.email}</td>
                <td><a href={user.web} target="_blank">{user.web}</a></td>
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