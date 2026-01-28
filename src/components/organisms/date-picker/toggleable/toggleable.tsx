import { useEffect, useToggleable } from 'pulsar';
import { ToggleableStateType } from './toggleable.context';
import { setCurrentToggleableContext } from './toggleable.context.hook';

interface ToggleableProviderProps {
  children: HTMLElement[] | HTMLElement;
  initialState?: ToggleableStateType;
  id?: string;
}

export const Toggleable = ({
  children,
  id,
  initialState,
}: ToggleableProviderProps): HTMLElement => {
  const toggleable = useToggleable(initialState ?? 'idle');

  const context = {
    toggleState: toggleable.state,
    setToggleState: (newStateOrCommandId?: string | ToggleableStateType) => {
      if (
        newStateOrCommandId === 'open' ||
        newStateOrCommandId === 'closed' ||
        newStateOrCommandId === 'idle'
      ) {
        toggleable.setState(newStateOrCommandId);
        return;
      }
      toggleable.toggle();
    },
  };

  // Set context BEFORE rendering children
  setCurrentToggleableContext(context);

  return <>{children}</>;
};
