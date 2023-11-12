import React from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

interface UnderlineTabsProps {
  tabs: any;
  activeTab: string;
}

const UnderlineTabs = ({
  tabs: data,
  activeTab: initial,
}: UnderlineTabsProps) => {
  const [activeTab, setActiveTab] = React.useState(initial);

  return (
    <div className="flex justify-between w-auto overflow-auto scrollbar-none py-2">
      <Tabs value={activeTab}>
        <TabsHeader className="rounded-none bg-transparent p-0">
          {data.map(({ label, value }: { label: string; value: string }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-white w-max px-4 cursor-pointer pb-2 border-b-2 border-white  font-bold"
                  : "w-max px-4 cursor-pointer text-white"
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

export default UnderlineTabs;
