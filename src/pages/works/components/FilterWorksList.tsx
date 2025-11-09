import { motion } from "framer-motion";
import { WorkFilter } from "../../../shared/persistence/GlobalStore";
import { DURATION, EASE_OUT } from "../../../shared/motion";

type FilterWorksListProps = {
  onFilterChange: (event: React.MouseEvent<HTMLLIElement>) => void;
  filter?: string;
};

const FILTERS: { value: WorkFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "backend", label: "Backend" },
  { value: "frontend", label: "Frontend" },
  { value: "tools", label: "Tools" },
];

const FilterWorksList: React.FC<FilterWorksListProps> = ({
  onFilterChange,
  filter,
}) => {
  return (
    <ul className="flex w-full justify-center flex-nowrap font-medium pb-6 space-x-8 font-primary">
      {FILTERS.map((item) => (
        <li
          key={item.value}
          data-filter={item.value}
          onClick={onFilterChange}
          className={`relative text-secondary cursor-pointer p-1 ${
            filter === item.value ? "" : "gradient-underline-animation-secondary"
          }`}
        >
          {item.label}
          {filter === item.value && (
            <motion.span
              layoutId="filter-underline"
              transition={{ duration: DURATION.base, ease: EASE_OUT }}
              className="absolute inset-x-1 -bottom-0.5 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default FilterWorksList;
