import { useState } from 'react';
import { Slider } from './Slider';
import { Checkbox } from './Checkbox';
import { PasswordStrength } from './Strength';
import { IconArrowRight } from './Icons/components';

function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="size-full flex flex-col justify-center items-center">
      <p className="text-text-secondary">Password Generator</p>
      <div className="flex flex-col gap-4 w-full max-w-[540px]">
        <div className="bg-background-secondary px-8 py-4 w-full text-3xl">
          <p>PTx1F5DaFX</p>
        </div>
        <div className="relative bg-background-secondary px-8 py-4 w-full ">
          <div className="flex items-center justify-between mb-4">
            <p>Character Length</p>
            <p className="text-password_strength-strong text-3xl">
              {passwordLength}
            </p>
          </div>
          <Slider setPasswordLength={setPasswordLength} />

          <div className="flex items-center gap-4">
            <Checkbox
              name="include-uppercase"
              checked={includeUppercase}
              onChange={() => {
                setIncludeUppercase(!includeUppercase);
              }}
            />
            <p>Include Uppercase Letters</p>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              name="include-lowercase"
              checked={includeLowercase}
              onChange={() => {
                setIncludeLowercase(!includeLowercase);
              }}
            />
            <p>Include Lowercase Letters</p>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              name="include-numbers"
              checked={includeNumbers}
              onChange={() => {
                setIncludeNumbers(!includeNumbers);
              }}
            />
            <p>Include Numbers</p>
          </div>
          <div className="flex items-center gap-4">
            <Checkbox
              name="include-symbols"
              checked={includeSymbols}
              onChange={() => {
                setIncludeSymbols(!includeSymbols);
              }}
            />
            <p>Include Symbols</p>
          </div>

          <PasswordStrength
            passwordLength={passwordLength}
            includeUppercase={includeUppercase}
            includeLowercase={includeLowercase}
            includeNumbers={includeNumbers}
            includeSymbols={includeSymbols}
          />
          <div className="group w-full h-[65px] bg-password_strength-strong hover:bg-transparent hover:border-2 border-password_strength-strong mt-8 justify-center items-center flex gap-6 transition-colors duration-500 hover:cursor-pointer">
            <p className="text-background-secondary text-xl font-bold group-hover:text-password_strength-strong">
              GENERATE
            </p>
            <IconArrowRight
              size="12"
              className="group-hover:text-password_strength-strong text-background-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
