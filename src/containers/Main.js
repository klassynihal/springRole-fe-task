import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import TablePage from './TablePage';
import DetailPage from './DetailPage';
import './normalize.scss';
import './skeleton.scss';
import NoMatch from '../components/NoMatch';
import Loader from '../components/Loader';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataArr: [], //to keep all users data 
    }
  }
  timer = null;
  // fetching data in component did mount
  componentDidMount() {
    const URL = 'http://demo9197058.mockable.io/users';
    fetch(URL).then(res => res.json())
      .then(data => {
        this.setState({
          dataArr: data,
          isLoading: false
        })
      })
    this.timer = setTimeout(this.setLoadingfalse, 7000); //load for atleast 7 sec
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  setLoadingfalse = () => {
    if (this.state.isLoading)
      this.setState({ isLoading: false })
  }

  render() {
    const { dataArr } = this.state;
    return (
      <section className="main">
        {this.state.isLoading ? <Loader /> :
          (
            (this.state.dataArr.length) ? (<Switch>
              <Route exact path='/' render={(props) => <TablePage {...props} users={dataArr} />} />
              <Route path='/user/:id' render={(props) => <DetailPage {...props} users={dataArr} />} />
              <Route component={NoMatch} />
            </Switch>) : <h1>Check your Internet Connection</h1>)}
      </section>
    );
  }
}

export default Main;