import TinyIcon from "../icons/TinyIcon";

export interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

interface Props {
  socialLinks: SocialLinkProps[];
}

const SocialLinks: React.FC<Props> = ({ socialLinks }) => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TinyIcon>{link.icon}</TinyIcon>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
