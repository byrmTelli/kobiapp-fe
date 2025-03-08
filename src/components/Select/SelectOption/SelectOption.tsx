import { Fragment } from 'react';

import { SelectOptionProps } from './types';

export default function SelectOption<T>({
    item,
    selectProps: { getLabelField, getValueField, renderLabelField },
}: SelectOptionProps<T>) {
    if (getLabelField)
        return (
            <option key={getValueField(item)} value={getValueField(item)}>
                {getLabelField(item)}
            </option>
        );

    if (renderLabelField) {
        return <>{renderLabelField(item, { value: getValueField(item) })}</>;
    }

    return <Fragment />;
}
