import React, { Component } from 'react';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.getUserFromArray()
  }

  componentDidUpdate() {
    const { users } = this.props
    if (!this.state.user && users.length) { this.getUserFromArray(); }
  }

  getUserFromArray = () => {
    const { users } = this.props;
    const { id } = this.props.match.params;
    const user = users.filter(u => (u.id === +id))[0];
    this.setState({ user });
  }

  goback = () => {
    this.props.history.push('/');
  }

  render() {
    const user = this.state.user || null;
    return (
      <section className="detail-page">
        <Header iconFn={this.goback} icon='fa fa-arrow-left' />
        {user ? <UserCard user={user} /> : null}
      </section >
    );
  }
}

export default DetailPage;