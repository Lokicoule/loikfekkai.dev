import { Tag } from "../../../../shared/components/elements/Tag";
import { KnowledgeProps } from "../../ResumeViewModel";

type KnowledgeSectionProps = {
  items: KnowledgeProps[];
  title: string;
};

const KnowledgeItem: React.FC<KnowledgeProps> = ({ name, type }) => {
  const typeColors: Record<string, string> = {
    /* framework: "bg-secondary",
    library: "bg-[#DDE7F2] dark:bg-[#7393A7]",
    database: "bg-[#99dbf5] dark:bg-[#1D2D50]", */
    methodology: "bg-[#9ac5f4] dark:bg-[#133B5C]",
    architecture: "bg-[#a7ecee] dark:bg-[#1E5F74]",
  };

  const bgColor = typeColors[type] || "";

  return <Tag className={`px-5 py-2 rounded-lg ${bgColor}`} text={name} />;
};

const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  items,
  title,
}) => {
  return (
    <div>
      <h4 className="text-3xl text-primary font-medium mb-8">{title}</h4>

      <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
        {items.map((item, i) => (
          <KnowledgeItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default KnowledgeSection;
