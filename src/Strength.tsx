export enum Strength {
  TOO_WEAK = 'TOO WEAK!',
  WEAK = 'WEAK',
  MEDIUM = 'MEDIUM',
  STRONG = 'STRONG',
}

export const PasswordStrength = ({
  passwordStrength,
}: {
  passwordStrength: Strength;
}) => {
  let strengthMeterElement: JSX.Element | null = null;

  switch (passwordStrength) {
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
    <div
      className="bg-background-primary w-full flex justify-between items-center mt-8
    px-4 py-[14px]
    sm:px-8 sm:py-5"
    >
      <p className="text-text-secondary text-base sm:text-lg">STRENGTH</p>
      <div className="flex gap-4 justify-center items-center">
        <p className="text-lg sm:text-2xl">{passwordStrength}</p>
        {strengthMeterElement}
      </div>
    </div>
  );
};
