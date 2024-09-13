import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { FC, ReactNode } from "react";

interface TabsProps {
  categories: { name: string; content: string | ReactNode }[];
}

export const Tabs: FC<TabsProps> = ({ categories }) => {
  return (
    <div className="flex min-h-44 w-full">
      <TabGroup>
        <TabList className="flex border-b border-lavender">
          {categories.map(({ name }) => (
            <Tab
              key={name}
              className="-mb-px px-8 py-1 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:border-b-2 data-[selected]:border-neon-pink data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {categories.map(({ name, content }) => (
            <TabPanel key={name}>{content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};
