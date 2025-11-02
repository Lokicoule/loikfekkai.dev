import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiChevronUp } from "react-icons/fi";
import { usePresenter } from "../../presentation/usePresenter";
import { LangPresenter } from "./LangPresenter";

type LangViewProps = {
  onLanguageChange: (language: string) => void;
  presenter: LangPresenter;
};

type LangViewComponent = React.FC<LangViewProps>;

const LangView: LangViewComponent = ({ presenter, onLanguageChange }) => {
  const viewModel = usePresenter(presenter);

  if (!viewModel) {
    return null;
  }

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button className="text-white bg-transparent text-sm p-3 rounded-md inline-flex items-center focus-no-outline border-1 border-transparent hover:border-white hover:border-opacity-50 transition duration-200 ease-in-out hover:text-opacity-80 hover:shadow-xs">
            <span className="uppercase">{viewModel.lang}</span>
            <FiChevronUp
              className={`
                ${open ? "rotate-180 transform" : ""}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-primary backdrop-blur-sm">
                  {[
                    {
                      code: "en",
                      name: "English",
                    },
                    {
                      code: "fr",
                      name: "Français",
                    },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        close();
                      }}
                      disabled={viewModel.lang === lang.code}
                      className={`flex items-start p-3 -m-3 rounded-lg text-secondary hover:bg-tertiary hover:text-tertiary transition ease-in-out duration-150`}
                    >
                      <div className="inline-flex items-center justify-around w-full">
                        <span>{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default LangView;
