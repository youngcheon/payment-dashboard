import React, { useState } from 'react';
import * as S from './styled';

interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: TabItem['value'];
}

export const Tabs = ({ tabs, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);

  return (
    <>
      <S.TabContainer>
        {tabs.map((tab) => (
          <S.TabButton
            key={tab.value}
            isActive={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </S.TabButton>
        ))}
      </S.TabContainer>
      <S.TabContent>{tabs.find((tab) => tab.value === activeTab)?.content}</S.TabContent>
    </>
  );
};
