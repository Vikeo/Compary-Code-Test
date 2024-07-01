enum Strength {
  TOO_WEAK = 'TOO WEAK!',
  WEAK = 'WEAK',
  MEDIUM = 'MEDIUM',
  STRONG = 'STRONG',
}

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

export const PasswordStrength = ({
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}: {
  passwordLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}) => {
  const strength = getPasswordStrength(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  let strengthMeterElement: JSX.Element | null = null;

  switch (strength) {
    case Strength.STRONG:
      strengthMeterElement = (
        <div className="flex gap-2">
          <div className="w-[10px] h-7 bg-password_strength-strong" />
          <div className="w-[10px] h-7 bg-password_strength-strong" />
          <div className="w-[10px] h-7 bg-password_strength-strong" />
          <div className="w-[10px] h-7 bg-password_strength-strong" />
        </div>
      );
      break;
    case Strength.MEDIUM:
      strengthMeterElement = (
        <div className="flex gap-2">
          <div className="w-[10px] h-7 bg-password_strength-medium" />
          <div className="w-[10px] h-7 bg-password_strength-medium" />
          <div className="w-[10px] h-7 bg-password_strength-medium" />
          <div className="w-[10px] h-7 border-2" />
        </div>
      );
      break;
    case Strength.WEAK:
      strengthMeterElement = (
        <div className="flex gap-2">
          <div className="w-[10px] h-7 bg-password_strength-weak" />
          <div className="w-[10px] h-7 bg-password_strength-weak" />
          <div className="w-[10px] h-7 border-2" />
          <div className="w-[10px] h-7 border-2" />
        </div>
      );
      break;
    default:
    case Strength.TOO_WEAK:
      strengthMeterElement = (
        <div className="flex gap-2">
          <div className="w-[10px] h-7 bg-password_strength-too_weak" />
          <div className="w-[10px] h-7 border-2" />
          <div className="w-[10px] h-7 border-2" />
          <div className="w-[10px] h-7 border-2" />
        </div>
      );
      break;
  }

  return (
    <div className="bg-background-primary px-8 py-4 w-full flex justify-between items-center">
      <p className="text-text-secondary">STRENGTH</p>
      <div className="flex gap-4 justify-center items-center">
        <p className="text-2xl">{strength}</p>
        {strengthMeterElement}
      </div>
    </div>
  );
};
