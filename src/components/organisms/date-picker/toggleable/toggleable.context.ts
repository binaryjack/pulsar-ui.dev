export type ToggleableStateType = 'idle' | 'open' | 'closed';

export interface IToggleableContextType {
  toggleState: () => ToggleableStateType;
  setToggleState: (commandId?: string) => void;
}
