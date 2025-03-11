import './styles/styles.scss';
import { resources } from './assets/ressurser.js';

import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router';

import Layout from './components/Layout';
import Resources from './components/Resources.jsx';

function App() {
  


  return (
    <Layout resources={resources}>
      <Routes>
        <Route path="/:category" element={<Resources resources={resources} />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
