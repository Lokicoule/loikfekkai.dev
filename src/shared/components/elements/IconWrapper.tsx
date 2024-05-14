export type IconWrapperProps = React.PropsWithChildren<{
  className?: string;
  variant?: IconVariant;
}>;

type IconWrapperComponent = React.FC<IconWrapperProps>;

type IconVariant = "primary" | "secondary";

const iconVariants: Record<IconVariant, string> = {
  primary:
    "hover:text-white hover:bg-gradient-to-b from-sky-400 to-blue-500 transition-colors duration-300 ease-in-out",
  secondary:
    "text-white bg-gradient-to-b from-sky-400 to-blue-500 transition-colors duration-300 ease-in-out hover:bg-gradient-to-t from-sky-400 to-blue-500",
};

const IconWrapper: IconWrapperComponent = ({
  children,
  className,
  variant = "primary",
}) => {
  return (
    <span
      className={`${className} w-10 h-10 rounded-lg flex justify-center items-center ${iconVariants[variant]}`}
    >
      {children}
    </span>
  );
};

export default IconWrapper;
