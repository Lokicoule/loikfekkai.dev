import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiNestjs, SiTypescript } from "react-icons/si";

import Tooltip from "../../../../shared/components/elements/Tooltip";

type StackSectionComponent = React.FC;

const StackSection: StackSectionComponent = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-primary text-primary mb-6">Stack</h3>

      <div className="flex flex-row space-x-6 mb-6">
        <Tooltip text="Typescript">
          <SiTypescript className="text-5xl text-primary" />
        </Tooltip>
        <Tooltip text="Node.js">
          <FaNode className="text-5xl text-primary" />
        </Tooltip>
        <Tooltip text="NestJS">
          <SiNestjs className="text-5xl text-primary" />
        </Tooltip>
        <Tooltip text="React">
          <FaReact className="text-5xl text-primary" />
        </Tooltip>
      </div>
    </div>
  );
};

export default StackSection;
