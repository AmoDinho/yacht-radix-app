import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({ props }) => {
  <RadixTabs.Tabs>
    <RadixTabs.TabsList>
      <RadixTabs.TabsTrigger value="tab1">Sign in</RadixTabs.TabsTrigger>
      <RadixTabs.TabsTrigger value="tab2">Sign up</RadixTabs.TabsTrigger>
    </RadixTabs.TabsList>
  </RadixTabs.Tabs>;
};

export default Tabs;
