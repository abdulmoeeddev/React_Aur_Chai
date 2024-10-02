  import { useState, useEffect, useCallback } from 'react';
  import './App.css';

  function App() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [char, setChar] = useState(false);
    const [pass, setPass] = useState("");

    const generatePassword = useCallback(() => {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + (numberAllowed ? "0123456789" : "") + (char ? "!@#$%^&*()" : "");
      let password = "";
      for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
      return password;
    }, [length, numberAllowed, char]);

    useEffect(() => {
      const newPassword = generatePassword();
      setPass(newPassword);
      console.log("Generated Password: ", newPassword);
    }, [generatePassword]);

    const handleNumberAllowedChange = () => {
      setNumberAllowed(!numberAllowed);
    };

    const handleCharChange = () => {
      setChar(!char);
    };

    const handleLengthChange = (e) => {
      setLength(Number(e.target.value));
    };

    return (
      <>
        <h1 className="text-3xl text-center text-white">Password Generator</h1>
        <div className="text-center text-white">
          <input 
            type="text" 
            value={pass} 
            readOnly 
            className="w-full max-w-xl mx-auto p-2 rounded-lg text-center bg-gray-800 text-white"
          />
          <div className="mt-4">
            <label className="mr-2">
              <input 
                type="checkbox" 
                checked={numberAllowed} 
                onChange={handleNumberAllowedChange} 
              />
              Include Numbers
            </label>
            <label className="ml-4">
              <input 
                type="checkbox" 
                checked={char} 
                onChange={handleCharChange} 
              />
              Include Special Characters
            </label>
          </div>
          <div className="mt-4">
            <label className="mr-2">Password Length: {length}</label>
            <input 
              type="range" 
              min="4" 
              max="20" 
              value={length} 
              onChange={handleLengthChange} 
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </>
    );
  }

  export default App;
