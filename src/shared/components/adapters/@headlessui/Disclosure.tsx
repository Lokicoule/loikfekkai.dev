import { Disclosure as HeadlessDisclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";

interface IDisclosureProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Disclosure: React.FC<IDisclosureProps> = ({
  icon,
  title,
  children,
  defaultOpen = false,
}) => {
  return (
    <HeadlessDisclosure as="div" className="mt-2" defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <HeadlessDisclosure.Button className="w-full flex justify-between rounded-lg px-4 py-2 text-sm font-medium bg-tertiary text-primary focus-ring">
            <div className="flex items-center">
              {icon}
              {title}
            </div>
            <FiChevronUp
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-blue-500`}
            />
          </HeadlessDisclosure.Button>
          <HeadlessDisclosure.Panel as="div" className="text-primary px-4 py-2">
            {children}
          </HeadlessDisclosure.Panel>
        </>
      )}
    </HeadlessDisclosure>
  );
};

export default Disclosure;
