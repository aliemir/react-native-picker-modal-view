// Global Imports
import { ReactElement } from "react";
import { ModalProps, FlatListProps, TextInputProps } from "react-native";

export type ListItem<
    T extends Record<string, unknown> = Partial<Record<string, unknown>>,
    U = unknown
> = {
    value: U;
    label: string;
} & T;

export interface IProps {
    items: Array<ListItem>;
    onSelect: (item: ListItem, index: number) => void;
    onBack?: boolean | (() => void);
    onClose?: boolean | (() => void);
    selected?: ListItem;
    sort?: boolean | ((a: ListItem, b: ListItem) => void);
    search?:
        | boolean
        | ((query: string | undefined, element: ListItem) => boolean)
        | ReactElement<{ items: ListItem[]; onSearch: () => ListItem[] }>;
    config?: {
        modalProps: ModalProps;
        flatListProps: FlatListProps<ListItem>;
        textInputProps: TextInputProps;
    };
    disabled?: boolean;
    itemComponent?: ReactElement<{
        item: ListItem;
        selected: ListItem;
        index: number;
    }>;
    selectComponent?: ReactElement<{ selected: ListItem }>;
    scrollToTop?: boolean | ReactElement<{ onToTop: () => void }>;
    keyIndex?: keyof ListItem;
    indexList?:
        | boolean
        | string[]
        | ((
              item: ListItem,
              index: number,
              items: ListItem[]
          ) => string | undefined);
    locale?: { selectPlaceholder: string; searchPlaceholder: string };
}
