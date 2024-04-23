import IconWrapper from "../elements/IconWrapper";
import type { HeroViewModelProps } from "./HeroViewModel";

type ContactInfoProps = HeroViewModelProps;
type ContactInfoComponent = React.FC<ContactInfoProps>;

const colors: string[] = [
  "text-[#9ac5f4] bg-primary",
  "text-[#99dbf5] bg-primary",
  "text-[#a7ecee] bg-primary",
  "text-[#ffeebb] bg-primary",
];

const ContactInfo: ContactInfoComponent = ({ infos }) => {
  return (
    <>
      {infos.map((info, index) => (
        <div
          key={index}
          className={`flex border-b border-primary py-2.5 ${
            index === infos.length - 1 ? "" : "mb-2.5"
          }`}
        >
          <IconWrapper className={colors[index % colors.length]}>
            {info.icon}
          </IconWrapper>
          <div className="text-left ml-2.5">
            <p className="text-xs text-secondary">{info.label}</p>
            {info.href ? (
              <p className="text-secondary break-all">
                <a
                  className="hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 hover:inline-block hover:text-transparent hover:bg-clip-text"
                  href={info.href}
                >
                  {info.value}
                </a>
              </p>
            ) : (
              <p className="text-secondary break-all">{info.value}</p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
