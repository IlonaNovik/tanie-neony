import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FC, ReactNode } from "react";

interface TabsProps {
  tabs: { name: string; content: string | ReactNode }[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  return (
    <div className="flex min-h-44">
      <TabGroup>
        <TabList className="flex w-full flex-col border-lavender md:flex-row md:border-b">
          {tabs.map(({ name }) => (
            <Tab
              key={name}
              className="-mb-px px-8 py-1 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:border-b-2 data-[selected]:border-neon-pink data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {tabs.map(({ name, content }) => (
            <TabPanel key={name}>{content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};
