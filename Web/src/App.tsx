import { useState } from 'react';
import styles from './App.module.scss';

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
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </div>
    );
}

export default App;
