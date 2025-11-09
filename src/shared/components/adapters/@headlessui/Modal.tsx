import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren, cloneElement, useState } from "react";
import { BsXCircle } from "react-icons/bs";

type ModalProps = {
  triggerButton: React.ReactElement;
  className?: string;
  panelClassName?: string;
  children: (props: {
    isOpen: boolean;
    handleClose: () => void;
  }) => React.ReactNode;
};

type ModalChildrenComponent = React.FC<
  PropsWithChildren<{
    className?: string;
  }>
>;

type ModalComponent = React.FC<ModalProps> & {
  Title: ModalChildrenComponent;
  Content: ModalChildrenComponent;
};

const Modal: ModalComponent = ({
  triggerButton,
  children,
  className,
  panelClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const trigger = cloneElement(triggerButton, {
    onClick: handleOpen,
  });

  return (
    <>
      {trigger}
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={handleClose}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-200 ease-out motion-reduce:transition-none"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150 ease-in motion-reduce:transition-none"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition duration-200 ease-out motion-reduce:transition-none"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-150 ease-in motion-reduce:transition-none"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`${className} relative p-4 md:p-8 z-50 bg-primary shadow-gray-900 rounded-xl shadow-none dark:shadow-lg`}
              >
                <div className="overflow-y-scroll max-h-[80vh] no-scrollbar">
                  <BsXCircle
                    onClick={handleClose}
                    className="h-10 w-10 cursor-pointer absolute -bottom-12 right-1/2 transform translate-x-1/2 md:-right-10 md:-top-6 z-50 text-white transition transform hover:rotate-45 duration-300 ease-in-out focus-no-outline"
                    tabIndex={0}
                  />
                  <Dialog.Panel className={panelClassName} as="div">
                    {children({
                      isOpen,
                      handleClose,
                    })}
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const Title: ModalChildrenComponent = ({ children, className }) => {
  return (
    <Dialog.Title as="div" className={className}>
      {children}
    </Dialog.Title>
  );
};

const Content: ModalChildrenComponent = ({ children, className }) => {
  return (
    <Dialog.Description as="div" className={className}>
      {children}
    </Dialog.Description>
  );
};

Modal.Title = Title;
Modal.Content = Content;

export default Modal;
