import IconWrapper from "./IconWrapper";
import type { IconWrapperProps } from "./IconWrapper";

export interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
  iconClassName?: string;
  iconInvariant?: IconWrapperProps["variant"];
}

interface Props {
  socialLinks: SocialLinkProps[];
}

const SocialLinks: React.FC<Props> = ({ socialLinks }) => {
  return (
    <div className="flex flex-wrap items-center space-x-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper
            className={link.iconClassName}
            variant={link.iconInvariant}
          >
            {link.icon}
          </IconWrapper>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
