import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({ props }) => {
  return (
    <RadixTabs.Root defaultValue="tab1">
      <RadixTabs.List>
        <RadixTabs.Trigger value="tab1">Sign in</RadixTabs.Trigger>
        <RadixTabs.Trigger value="tab2">Sign up</RadixTabs.Trigger>
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};

export default Tabs;
