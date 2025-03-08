import { ForwardedRef, ReactNode, SelectHTMLAttributes } from 'react';

interface SelectComponentBaseProps<T> {
    options: T[];
    value: T | null;
    label?: ReactNode;
    invalid?: boolean | string;
    loading?: boolean;
    disabled?: boolean;
    emptyOption?: boolean | string;
    onChange: (value: T | null) => void;
    getValueField: (item: T) => string;
    ref?: ForwardedRef<HTMLSelectElement>;
}

interface SelectComponentPropsWithoutRenderLabel<T> {
    renderLabelField?: never;
    getLabelField: (item: T) => string;
}

type RenderOptionFieldProps = { value: string };

interface SelectComponentPropsWithRender<T> {
    getLabelField?: never;
    renderLabelField: (
        item: T,
        optionFields?: RenderOptionFieldProps,
    ) => React.DetailedHTMLProps<
        React.OptionHTMLAttributes<HTMLOptionElement>,
        HTMLOptionElement
    >;
}

type SelectComponentProps<T> = SelectComponentBaseProps<T> &
    (
        | SelectComponentPropsWithoutRenderLabel<T>
        | SelectComponentPropsWithRender<T>
    );

export type SelectProps<T> = SelectComponentProps<T> &
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'>;
