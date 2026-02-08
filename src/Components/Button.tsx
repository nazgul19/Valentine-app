interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  textSize: "sm" | "md" | "lg";
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-pink-400 rounded-full text-slate-200 font-bold",
  secondary: "bg-gray-200 rounded-full",
};

const SizeStyles = {
  sm: "px-2 py-1",
  md: "px-3 py-2 sm:px-6 sm:py-3",
  lg: "px-4 py-2 sm:px-8 sm:py-4 md:px-10 md:py-5",
};

const TextSize = {
  sm: "text-sm ",
  md: "text-sm sm:text-base md:text-lg",
  lg: "text-base sm:text-xl md:text-2xl lg:text-3xl",
};

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${SizeStyles[props.size]} ${
        TextSize[props.textSize]
      }`}
    >
      {props.text}
    </button>
  );
}
