import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string;
}
const IconCheck = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 16}
      height={props.size || 16}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="none"
        stroke="#18171F"
        strokeWidth={3}
        d="M1 5.607 4.393 9l8-8"
      />
    </svg>
  );
};
export default IconCheck;
