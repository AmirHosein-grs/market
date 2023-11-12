import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

interface TransparentTabsProps {
  tabs: Array<{ label: string; value: string }>;
  activeTab: string;
}

const TransparentTabs = ({
  tabs: data,
  activeTab: initial,
}: TransparentTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(initial);

  return (
    <div className="flex justify-between w-auto overflow-auto scrollbar-none py-2">
      <Tabs value={activeTab} className="max-w">
        <TabsHeader className="bg-transparent">
          {data.map(({ label, value }: { label: string; value: string }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "px-4 cursor-pointer border-2 mx-1 border-white rounded-full bg-white text-black font-bold "
                  : "px-4 cursor-pointer border-2 mx-1 border-white rounded-full text-white"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </div>
  );
};

export default TransparentTabs;
