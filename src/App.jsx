import './styles/styles.scss';
import { resources } from './assets/ressurser.js';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';

import Layout from './components/Layout';
import Resources from './components/Resources.jsx';

function App() {

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("html");


  const handleChange = () => {
    setCategories(resources.filter((value, index) => 
      resources.findIndex((item) => item.category === value.category) === index
    ));
  }
  
  useEffect(() => {
    handleChange();
    console.log(categories);
  }, [resources]);


  return (
    <Layout categories={categories} currentCateory={currentCategory} setCurrentCategory={setCurrentCategory}>
      <Routes>
        <Route path="/:category" element={<Resources resources={resources} currentCategory={currentCategory} />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
