// Global Imports
import { ReactElement } from "react";
import { ModalProps, FlatListProps, TextInputProps } from "react-native";

export interface IListItem {
    value: unknown;
    label: string;
}

export interface IModalProps<ListItemType extends IListItem = IListItem> {
    items: Array<ListItemType>;
    onSelect: (item: ListItemType, index: number) => void;
    onBack?: boolean | (() => void | boolean);
    onClose?: boolean | (() => void | boolean);
    selected?: ListItemType;
    sort?: boolean | ((a: ListItemType, b: ListItemType) => number);
    search?: boolean | ((query: string, element: ListItemType) => boolean);
    config?: {
        modalProps: ModalProps;
        flatListProps: Partial<FlatListProps<ListItemType>>;
        textInputProps: TextInputProps;
    };
    disabled?: boolean;
    searchComponent?: (
        items: ListItemType[],
        onSearchPress: (filteredItems: ListItemType[]) => void,
        onBackPress: undefined | (() => void),
        onClosePress: undefined | (() => void),
        placeholder: string
    ) => ReactElement;
    itemComponent?: (
        item: ListItemType,
        selected: ListItemType | undefined,
        index: number
    ) => ReactElement;
    selectComponent?: (
        selected: ListItemType | IListItem | undefined,
        disabled: boolean,
        placeholder: string
    ) => ReactElement;
    scrollToTop?: boolean | ((onToTop: () => void) => ReactElement);
    keyIndex?: keyof ListItemType;
    indexList?:
        | boolean
        | string[]
        | ((
              item: ListItemType,
              index: number,
              items: ListItemType[]
          ) => string | undefined);
    locale?: { selectPlaceholder: string; searchPlaceholder: string };
}
