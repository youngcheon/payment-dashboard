import React, { useState, createContext, ReactNode } from 'react';
import * as S from './styled';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProps {
  defaultTab?: string;
  children: ReactNode;
}

interface TabItemProps {
  label: string;
  value: string;
  children: ReactNode;
}

export const Tabs = ({ defaultTab, children }: TabsProps) => {
  const firstTabValue = React.Children.toArray(children)[0] as React.ReactElement;
  const [activeTab, setActiveTab] = useState(defaultTab || firstTabValue.props.value);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <S.TabContainer>
        {React.Children.map(children, (child) => {
          const item = child as React.ReactElement<TabItemProps>;
          return (
            <S.TabButton
              key={item.props.value}
              isActive={activeTab === item.props.value}
              onClick={() => setActiveTab(item.props.value)}
            >
              {item.props.label}
            </S.TabButton>
          );
        })}
      </S.TabContainer>
      <S.TabContent>
        {React.Children.map(children, (child) => {
          const item = child as React.ReactElement<TabItemProps>;
          return activeTab === item.props.value ? item.props.children : null;
        })}
      </S.TabContent>
    </TabsContext.Provider>
  );
};

// Tabs.Item 컴포넌트 추가
Tabs.Item = ({ children }: TabItemProps) => {
  return <>{children}</>;
};
