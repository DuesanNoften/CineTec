import { useState } from 'react';
import styles from './App.module.scss';
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Alogin from './components/admin-login/admin-login';

const app = () => (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Alogin" element={<Alogin />} />
      </Routes>
    </Router>
  );

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <div>
                <a href="https://reactjs.org" target="_blank"></a>
            </div>
            <div className={styles.card}>
                <button onClick={() => app}></button>
            </div>
        </div>
    );
}

export default App;
