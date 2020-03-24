import { useCallback, useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { fetchEvents } from 'client/src/redux/actions/events';
import { eventSelector } from 'client/src/redux/selectors';
import { RootState } from 'client/src/redux/types';

export function useEvents() {
  const mapState = useCallback(
    (state: RootState) => ({
      events: state.eventLists.all.map(id => eventSelector(state, id)),
    }),
    [],
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return useMappedState(mapState);
}
