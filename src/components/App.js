import React from 'react';
import BullsEyeAPI from '../apis/bullseye';

import './App.scss';

export default class App extends React.Component {
  state = { message: '' };

  componentDidMount () {
    this.callExpressApi()
      .then(res => this.setState({ message: res.message }))
      .catch(err => console.error(err));
  }

  callExpressApi = async () => {
    const response = await BullsEyeAPI.get('/api');

    if (response.status !== 200) throw new Error(response.data);

    return response.data;
  }

  render () {
    return (
      <div>
        <h1 className="init-header">BullsEye</h1>
        <p className="init-subcopy">a Target server-side sandbox</p>
        
        <div className='init-config'>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}
