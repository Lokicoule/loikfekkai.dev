import ThemeProvider from "./ThemeProvider";

const ThemeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeContainer;
