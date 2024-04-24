import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';

function App() {
    const [word, setWord] = useState('');
    const [hashValue, setHashValue] = useState('');
    const [copiedHash, setCopiedHash] = useState('');
    const [isHashMatch, setIsHashMatch] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleHash = () => {
        const hashedValue = SHA256(word).toString();
        setHashValue(hashedValue);
        setCopiedHash('');
        setIsHashMatch(false);
        setCopied(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(hashValue);
        setCopied(true);
    };

    const handleVerify = () => {
        setIsHashMatch(hashValue === copiedHash);
    };

    return (
        <div>
            <h1>Hashing Example</h1>
            <input
                type="text"
                placeholder="Enter a word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <button onClick={handleHash}>Hash</button>
            {hashValue && (
                <div>
                    <div>Hashed Value: {hashValue}</div>
                    <button onClick={handleCopy}>Copy</button>
                    {copied && <span>Hash value copied!</span>}
                </div>
            )}
            <input
                type="text"
                placeholder="Paste copied hash here"
                value={copiedHash}
                onChange={(e) => setCopiedHash(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {isHashMatch && <div>Hashes match!</div>}
            {!isHashMatch && isHashMatch !== '' && <div>Hashes do not match!</div>}
        </div>
    );
}

export default App;
