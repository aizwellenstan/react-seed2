import React from 'react';
import { useEvents } from 'client/src/hooks/use-events';
import { Sidebar } from 'client/src/components/sidebar';

export const SidebarContainer = () => {
  const { events } = useEvents();
  return <Sidebar events={events} />;
};
