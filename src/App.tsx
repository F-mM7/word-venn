import { useState } from 'react';
import WordInput from './components/WordInput';
import VennDiagram from './components/VennDiagram';
import styles from './App.module.css';

function App() {
  const [words, setWords] = useState<[string, string, string]>(['', '', '']);

  const handleClear = () => {
    setWords(['', '', '']);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>triptrip</h1>
        <p className={styles.description}>
          3つの単語の文字の重複関係をベン図で視覚化します
        </p>
      </header>

      <div className={styles.content}>
        <WordInput words={words} onWordsChange={setWords} onClear={handleClear} />
        <VennDiagram words={words} />
      </div>
    </div>
  );
}

export default App;
