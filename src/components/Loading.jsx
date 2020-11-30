import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Loading.scss';

function Loading() {
  return (
    <div className="Loading">
      <img src={logo} alt="loading videos" id="loading1" />
      <img src={logo} alt="loading videos" id="loading2" />
    </div>
  )
}

export default Loading;