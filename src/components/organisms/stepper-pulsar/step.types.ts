/**
 * Step component types
 */
import type { StepValidator } from '../context';

export interface IStepProps {
  id: number;
  label: string;
  validator?: StepValidator;
  children?: HTMLElement[];
}
