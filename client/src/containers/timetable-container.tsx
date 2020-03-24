import React from 'react';
import { Timetable } from 'client/src/components/timetable';
import { useEvents } from 'client/src/hooks/use-events';

export const TimetableContainer = () => {
  const { events } = useEvents();
  return <Timetable events={events} />;
};
