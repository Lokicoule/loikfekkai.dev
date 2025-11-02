import React from "react";
import { ExperienceLabels, ExperienceProps } from "../../ResumeViewModel";
import ExperienceModal from "./ExperienceModal/ExperienceModal";
import Tooltip from "../../../../shared/components/elements/Tooltip";

type ExperienceItemProps = {
  item: ExperienceProps;
  labels: ExperienceLabels;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, labels }) => {
  const renderTooltip = () => {
    if (item.company && item.internship) {
      return (
        <Tooltip text={item.internship.duration ?? ""}>
          <span className="text-xs text-tertiary">
            @{item.company}
            {item.internship && <span className="text-[#0072b1]">*</span>}
          </span>
        </Tooltip>
      );
    }

    if (item.company) {
      return <span className="text-xs text-tertiary">@{item.company}</span>;
    }

    return null;
  };

  return (
    <div
      key={item.id}
      className="rounded-xl p-8 py-4 pl-5 pr-3 space-y-2 mb-6 bg-primary border-1 border-primary"
    >
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between">
          <span className="text-xs text-tertiary">{item.duration}</span>
          {renderTooltip()}
        </div>
        <div className="flex items-center space-x-2">
          <ExperienceModal
            triggerButton={
              <button className="text-xl text-secondary font-bold gradient-underline-animation p-1">
                {item.name}
              </button>
            }
            experience={item}
            labels={labels}
          />
        </div>
        {item.client && (
          <span className="text-tertiary mt-2">{item.client.name}</span>
        )}
        <span className="text-tertiary">{item.place}</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
