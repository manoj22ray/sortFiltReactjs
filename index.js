import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {MainComp} from './src/MainComp'

import './src/style/style.css'
var desct = document.getElementById('root');
ReactDOM.render(<MainComp />, desct);
