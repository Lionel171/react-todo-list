import React from 'react';

import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Form />
      </Layout>
    </div>
  );
}

export default App;
