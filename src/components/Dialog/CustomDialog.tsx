import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  CustomDialogContentProps,
  CustomDialogHeaderProps,
  CustomDialogProps,
} from "./types";

export default function CustomDialog({
  title,
  children,
  onConfirm,
  isOpen,
  onClose,
}: CustomDialogProps) {
  // States

  // Handlers
  const handleDialogButtonClose = () => onClose(false);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={handleDialogButtonClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">{children}</div>

                <div className="mt-4 flex gap-2 items-center justify-end">
                  {onConfirm && (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-900/90 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:border-blue-900/90 hover:text-blue-900/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onConfirm}
                    >
                      Onayla
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-900/90 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:border-blue-900/90 hover:text-blue-900/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleDialogButtonClose}
                  >
                    İptal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

CustomDialog.Header = function Header({ children }: CustomDialogHeaderProps) {
  return { children };
};

CustomDialog.Content = function Content({
  children,
}: CustomDialogContentProps) {
  return children;
};
