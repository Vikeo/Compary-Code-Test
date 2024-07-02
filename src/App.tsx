import { useState } from 'react';
import { Slider } from './Slider';
import { Checkbox } from './Checkbox';
import { PasswordStrength, Strength } from './Strength';
import { IconArrowRight, IconCopy } from './Icons/components';

const getPasswordStrength = (
  passwordLength: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
) => {
  if (passwordLength < 8) {
    return Strength.TOO_WEAK;
  }

  if (!includeUppercase && !includeLowercase) {
    return Strength.TOO_WEAK;
  }

  if (!includeNumbers && !includeSymbols) {
    return Strength.TOO_WEAK;
  }

  if (
    includeUppercase &&
    includeLowercase &&
    includeNumbers &&
    includeSymbols
  ) {
    return Strength.STRONG;
  }

  if (
    includeUppercase &&
    includeLowercase &&
    (includeNumbers || includeSymbols)
  ) {
    return Strength.MEDIUM;
  }

  return Strength.WEAK;
};

function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [generatedPassword, setGeneratedPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const strength = getPasswordStrength(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  const generatePassword = () => {
    if (strength === Strength.TOO_WEAK) {
      return;
    }
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*';

    let allChars = '';
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === '') {
      setGeneratedPassword('');
      return;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4">
      <p
        className="text-text-secondary mb-4 text-base
      sm:text-2xl sm:mt-4 sm:mb-8"
      >
        Password Generator
      </p>
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[540px] ">
        <div
          className="bg-background-secondary w-full flex justify-between items-center
          py-4 px-4 text-2xl
          sm:px-8 sm:py-[19px] sm:text-3xl
        "
        >
          <p
            data-is-generated={Boolean(generatedPassword)}
            className="data-[is-generated=false]:text-text-secondary"
          >
            {generatedPassword || 'P4$$w0rd!'}
          </p>
          <div className="relative">
            <IconCopy
              className="hover:text-text-primary text-password_strength-strong transition-colors cursor-pointer duration-200
              
              scale-75
              
              sm:scale-100"
              onClick={() => {
                if (!generatedPassword) {
                  return;
                }
                navigator.clipboard.writeText(generatedPassword);
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 3500);
              }}
              size="24"
            />
            <p
              data-copied={copied}
              className="opacity-0 absolute right-10 text-password_strength-strong data-[copied=true]:opacity-100 transition-all duration-200 select-none ease-out top-0 text-base
              sm:text-lg
              "
            >
              COPIED
            </p>
          </div>
        </div>
        <div
          className="relative bg-background-secondary w-full
          px-4 py-4
          sm:px-8 sm:pt-6 sm:pb-8
          "
        >
          <div className="flex items-center justify-between mb-2 sm:mb-4 h-8 sm:h-11">
            <p className="sm:text-lg text-base">Character Length</p>
            <p className="text-password_strength-strong sm:text-3xl text-2xl">
              {passwordLength}
            </p>
          </div>

          <Slider setPasswordLength={setPasswordLength} />

          <div className="flex flex-col gap-4 sm:gap-5 mt-8 text-base sm:text-lg">
            <div className="flex items-center gap-5 sm:gap-6">
              <Checkbox
                name="include-uppercase"
                checked={includeUppercase}
                onChange={() => {
                  setIncludeUppercase(!includeUppercase);
                }}
              />
              <p>Include Uppercase Letters</p>
            </div>
            <div className="flex items-center gap-5 sm:gap-6">
              <Checkbox
                name="include-lowercase"
                checked={includeLowercase}
                onChange={() => {
                  setIncludeLowercase(!includeLowercase);
                }}
              />
              <p>Include Lowercase Letters</p>
            </div>
            <div className="flex items-center gap-5 sm:gap-6">
              <Checkbox
                name="include-numbers"
                checked={includeNumbers}
                onChange={() => {
                  setIncludeNumbers(!includeNumbers);
                }}
              />
              <p>Include Numbers</p>
            </div>
            <div className="flex items-center gap-5 sm:gap-6">
              <Checkbox
                name="include-symbols"
                checked={includeSymbols}
                onChange={() => {
                  setIncludeSymbols(!includeSymbols);
                }}
              />
              <p>Include Symbols</p>
            </div>
          </div>

          <PasswordStrength passwordStrength={strength} />
          <div
            data-disabled={strength === Strength.TOO_WEAK}
            className="group w-full bg-password_strength-strong border-password_strength-strong justify-center items-center flex  transition-colors duration-500 
            mt-4 h-[56px] gap-4
            sm:mt-8 sm:h-[65px] sm:gap-6
            
            data-[disabled=false]:hover:cursor-pointer
            data-[disabled=false]:hover:bg-transparent 
            data-[disabled=false]:hover:border-2 

            data-[disabled=true]:cursor-not-allowed
            data-[disabled=true]:bg-password_strength-weak"
            onClick={generatePassword}
          >
            <p className="text-background-secondary text-base sm:text-xl font-bold group-data-[disabled=false]:group-hover:text-password_strength-strong">
              GENERATE
            </p>
            <IconArrowRight
              size="12"
              className="group-data-[disabled=false]:group-hover:text-password_strength-strong text-background-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
