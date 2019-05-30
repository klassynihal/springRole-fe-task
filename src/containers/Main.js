import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import TablePage from './TablePage';
import DetailPage from './DetailPage';
import './normalize.scss';
import './skeleton.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr: [], //to keep all users data 
    }
  }
  //fetching data in component did mount
  componentDidMount() {
    const URL = 'http://demo9197058.mockable.io/users';
    fetch(URL).then(res => res.json())
      .then(data => {
        this.setState({
          dataArr: data
        })
      })
  }

  render() {
    const { dataArr } = this.state;
    return (
      <section className="main">
        <Switch>
          <Route exact path='/' render={(props) => <TablePage {...props} users={dataArr} />} />
          <Route path='/user/:id' render={(props) => <DetailPage {...props} users={dataArr} />} />
        </Switch>
      </section>
    );
  }
}

export default Main;