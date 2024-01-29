import { Button } from './components/Button';

import styles from './App.module.scss';

const App: React.FC = () => (
  <div className={styles.container}>
    <h1>Vite with jest-preview example</h1>
    <Button />
  </div>
);


export default App;
