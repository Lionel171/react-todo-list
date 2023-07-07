import React from 'react';

import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
      </Layout>
    </div>
  );
}

export default App;
