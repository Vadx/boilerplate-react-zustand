interface LogoProps {
  size?: "small" | "medium" | "large";
  color?: "black" | "white" | "blue";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Logo = ({
  size = "medium",
  color = "black",
  className,
  onClick,
  style,
}: LogoProps) => {
  return (
    <span
      className={`flex items-center justify-center ${className}`}
      onClick={onClick}
      style={style}
    >
      <svg
        width={size === "small" ? 24 : size === "large" ? 64 : 32}
        height={size === "small" ? 24 : size === "large" ? 64 : 32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-${color} transition-all duration-300 ease-in-out`}
      >
        <path
          d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
          fill="currentColor"
        />
      </svg>
      <span
        className={`text-${color} text-${size === "small" ? "sm" : size === "large" ? "xl" : "lg"} ml-2 font-medium`}
      >
        Boilerplate Logo
      </span>
    </span>
  );
};

export default Logo;
