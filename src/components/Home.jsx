import React from 'react';
import Navbar from './Navbar/index.jsx'
import TableContainer from './../containers/TableContainer.js'

import './../style/main.less';

const Home = () => {
    return (
    <div className="home">
        <Navbar />
        <TableContainer />
    </div>
  );
};

export default Home;
