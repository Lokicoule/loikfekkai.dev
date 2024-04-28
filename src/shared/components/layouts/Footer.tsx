const Footer = () => {
  return (
    <footer className="lg:rounded-2xl lg:bg-primary">
      <p className="text-center py-6 text-secondary">
        © {new Date().getFullYear()} All Rights Reserved by
        <a
          className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text font-bold hover:text-primary"
          href="https://loikfekkai.dev"
          target="_blank"
        >
          Lokicoule
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
