import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <ReactLogo
                        height="6em"
                        width="6em"
                        className={classNames(styles.logo, styles.react)}
                        title="React logo"
                    />
                </a>
            </div>
            <div className={styles.card}>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </div>
    );
}

export default App;
