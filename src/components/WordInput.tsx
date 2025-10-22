interface WordInputProps {
  words: [string, string, string];
  onWordsChange: (words: [string, string, string]) => void;
  onClear: () => void;
}

export default function WordInput({
  words,
  onWordsChange,
  onClear,
}: WordInputProps) {
  const handleChange = (index: number, value: string) => {
    const newWords: [string, string, string] = [...words] as [
      string,
      string,
      string,
    ];
    newWords[index] = value;
    onWordsChange(newWords);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '18px' }}>単語を入力</h2>
        <button
          onClick={onClear}
          style={{
            padding: '6px 16px',
            fontSize: '14px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '500',
          }}
        >
          Clear
        </button>
      </div>
      {[0, 1, 2].map((index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor={`word-${index + 1}`}
            style={{ marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}
          >
            単語{index + 1}
          </label>
          <input
            id={`word-${index + 1}`}
            type="text"
            value={words[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </div>
      ))}
    </div>
  );
}
