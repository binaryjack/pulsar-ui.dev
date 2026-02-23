/**
 * Field binding types
 *
 * These types describe the props shape each bind hook returns.
 * They are pure HTML-compatible — atoms remain agnostic of formular.
 */

/** Base aria + interaction props shared by all bind results */
export interface IBaseBindProps {
  readonly name: string;
  readonly disabled: boolean;
  readonly required: boolean;
  readonly 'aria-invalid': boolean;
  readonly 'aria-required': boolean;
  readonly onFocus: () => void;
  readonly onBlur: () => void;
}

/** Bind props for <Input> (text, number, email, …) */
export interface IInputBindProps extends IBaseBindProps {
  readonly value: string | number;
  readonly onInput: (e: Event & { target: HTMLInputElement }) => void;
}

/** Bind props for <Textarea> */
export interface ITextareaBindProps extends IBaseBindProps {
  readonly value: string;
  readonly onInput: (e: Event & { target: HTMLTextAreaElement }) => void;
}

/** Bind props for <Checkbox> */
export interface ICheckboxBindProps extends IBaseBindProps {
  readonly checked: boolean;
  readonly onChange: (e: Event & { target: HTMLInputElement }) => void;
}

/** Bind props for <Radio> — requires the option value this radio represents */
export interface IRadioBindProps extends IBaseBindProps {
  readonly checked: boolean;
  readonly value: string;
  readonly onChange: () => void;
}

/** Bind props for <Toggle> */
export interface IToggleBindProps extends IBaseBindProps {
  readonly checked: boolean;
  readonly onChange: (checked: boolean) => void;
}

/** Bind props for <Select> */
export interface ISelectBindProps extends IBaseBindProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}
