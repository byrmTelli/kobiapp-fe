import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { PopoverProps } from "./types";
import PopoverSubItem from "./PopoverSubItem/PopoverSubItem";

export default function CustomPopover({ mainItem, subItems }: PopoverProps) {
  return (
    <Popover className="relative">
      {() => (
        <>
          {/* Buton */}
          <PopoverButton className="px-4 py-2 dark:bg-gray-900 dark:hover:bg-gray-800 text-white rounded-lg focus:outline-none">
            {mainItem}
          </PopoverButton>

          {/* Açılır Menü */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute left-0 top-full mt-2 w-56 border bg-white border-gray-300 rounded-lg shadow-lg ring-1 ring-black/5">
              <div className="flex flex-col gap-2">
                {subItems.map((item, index) => (
                  <PopoverSubItem
                    key={index}
                    title={item?.title}
                    icon={item?.icon}
                    className="px-4 py-2"
                  />
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
