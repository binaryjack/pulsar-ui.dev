import { IToggleableContextType } from './toggleable.context';

let _currentToggleableContext: IToggleableContextType | null = null;

export const setCurrentToggleableContext = (context: IToggleableContextType) => {
  _currentToggleableContext = context;
};

export const useToggleableContext = (): IToggleableContextType => {
  if (!_currentToggleableContext) {
    throw new Error('useToggleableContext must be used within a Toggleable provider');
  }
  return _currentToggleableContext;
};
