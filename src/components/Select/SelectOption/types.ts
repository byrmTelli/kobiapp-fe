import { SelectProps } from '../types';

export interface SelectOptionProps<T> {
    item: T;
    selectProps: SelectProps<T>;
}
