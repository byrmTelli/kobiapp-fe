import { createContext, useContext, useState, ReactNode } from "react";

// Prop Tanımlamaları
interface TabsComponentProps {
  children: ReactNode;
  defaultIndex?: number;
}

interface TabListComponentProps {
  children: ReactNode;
}

interface TabComponentProps {
  children: ReactNode;
  index: number;
}

interface TabPanelComponentProps {
  children: ReactNode;
  index: number;
  className?: string;
}

interface TabContextProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

// Varsayılan Context Değeri
const defaultContextValue: TabContextProps = {
  activeIndex: 0,
  setActiveIndex: () => {}, // No-op işlev
};

// Context Oluşturma
const TabsContext = createContext<TabContextProps>(defaultContextValue);

// Güvenli Context Hook
const useTabsContext = (): TabContextProps => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a TabsProvider");
  }
  return context;
};

// Tabs Bileşeni
export const Tabs = ({ children, defaultIndex = 0 }: TabsComponentProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const value = {
    activeIndex,
    setActiveIndex,
  };

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs flex flex-col w-full border h-full border-gray-200 p-2">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// TabList Bileşeni
export const TabList = ({ children }: TabListComponentProps) => {
  return <div className="tab-list flex items-center">{children}</div>;
};

// Tab Bileşeni
export const Tab = ({ children, index }: TabComponentProps) => {
  const { activeIndex, setActiveIndex } = useTabsContext();

  const handleClick = () => {
    setActiveIndex(index);
  };

  return (
    <button
      className={`tab ${activeIndex === index ? "active border-b border-teal-700 " : ""} px-2 py-2 text-sm font-semibold my-2`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// TabPanel Bileşeni
export const TabPanel = ({
  children,
  index,
  className,
}: TabPanelComponentProps) => {
  const { activeIndex } = useTabsContext();

  if (activeIndex !== index) return null;

  return (
    <div
      className={`tab-panel flex-1 overflow-auto p-2 border border-gray-300 rounded-br-lg ${className}`}
    >
      {children}
    </div>
  );
};
