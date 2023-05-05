/* eslint-disable sort-imports */
import * as $ from 'jquery';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

import '@model/lodash';

import Post from '@model/post';
import json from '@assets/data.json';
import logo from '@assets/icon-square-big.png';
import xml from '@assets/data.xml';
import csv from '@assets/data.csv';

import '@css/style.css';
import './less/style.less';
import './sass/style.scss';
import './sass/style.sass';

const post = new Post('Webpack Post Title', logo);

console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);

async function start() {
  // eslint-disable-next-line no-return-await
  return await new Promise((r) => setTimeout(() => r('Async done'), 3000));
}

start().then(() => {
  $('pre').addClass('code')
  .html(post.toString());
});

class Util {
  static id = Date.now
}

console.log(Util.id);

//react

const App = () => (
  <div className="container">
    <h1>Webpack training</h1>
    <div className="logo"/>
    <pre/>
    <div className="less-demo">
      <h2>Less</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass</h2>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
