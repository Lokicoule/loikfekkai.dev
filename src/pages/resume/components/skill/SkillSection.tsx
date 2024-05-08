import ProgressBar from "../../../../shared/components/elements/ProgressBar";
import { SkillProps } from "../../ResumeViewModel";

type SkillSectionProps = {
  items: SkillProps[];
  title: string;
};

type SkillSectionComponent = React.FC<SkillSectionProps>;

const SkillItem: React.FC<SkillProps> = ({ name, value, type }) => {
  const bgColor =
    type === "hard" ? "bg-tertiary" : "bg-[#DDE7F2] dark:bg-[#7393A7]";

  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <h5 className="font-semibold text-primary">{name}</h5>
      </div>
      <ProgressBar progress={value} bgColor={bgColor} />
    </div>
  );
};

const SkillSection: SkillSectionComponent = ({ items, title }) => {
  return (
    <div>
      <h4 className="text-3xl text-primary font-medium mb-6">{title}</h4>
      {items.map((item, i) => (
        <SkillItem key={i} {...item} />
      ))}
    </div>
  );
};

export default SkillSection;
