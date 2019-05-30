import React from 'react';
import './nomatch.scss'

const NoMatch = (props) => {
  return (
    <div className="no-match">

      <div className="wrapper">
        <h1>Hmm.</h1>
        <p>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</p>
        <div className="buttons"><div onClick={() => props.history.push('/')}>home</div><br /><span>Help me out</span></div>
      </div>
      <div className="space">
        <div className="blackhole"></div>
        <div className="ship"></div>
      </div>

    </div >
  );
};

export default NoMatch;