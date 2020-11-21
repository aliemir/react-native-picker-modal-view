/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, ReactNode } from "react";
import {
    Modal,
    View,
    Text,
    FlatList,
    KeyboardAvoidingView,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
    ListItemComponent,
    SearchComponent,
    SelectBoxComponent,
} from "@Components";
import {
    IDefaultListItem,
    IListItem,
    IModalProps,
} from "@Interfaces/IModalProps";
import { SelectComponent } from "./SelectComponent";
import { CommonStyle, ModalStyles } from "@Styles";

const defaultProps: IModalProps = {
    items: [],
    onSelect: () => undefined,
    onBack: () => undefined,
    onClose: () => undefined,
    selected: undefined,
    sort: (a, b) => a.label.localeCompare(b.label),
    search: (query, element) => element.label.includes(query),
    config: { modalProps: {}, flatListProps: {}, textInputProps: {} },
    disabled: false,
    searchComponent: (items, onSearch) => <></>,
    itemComponent: (item, selected) => <></>,
    selectComponent: (selected, disabled, placeholder) => <></>,
    scrollToTop: (onToTop) => <></>,
    keyIndex: "value",
    indexList: (item) => item.label.charAt(0), // get an helper function
    locale: {
        selectPlaceholder: "Please select one...",
        searchPlaceholder: "Type to search...",
    },
};

function ModalComponent<ListItemType extends IListItem = IDefaultListItem>(
    props: IModalProps<ListItemType>
): ReactElement | null {
    const {
        items,
        onSelect,
        onBack,
        onClose,
        selected,
        sort,
        search,
        config,
        disabled,
        searchComponent,
        itemComponent,
        selectComponent,
        scrollToTop,
        keyIndex,
        indexList,
        locale,
    } = { ...props };

    const [viewVisible, setViewVisible] = React.useState(false);

    const renderSelect = () => {
        if (selectComponent) {
            return selectComponent(
                selected,
                !!disabled,
                "Please select one..."
            );
        }
        return (
            <SelectComponent
                selected={selected}
                disabled={!!(disabled ?? false)}
                placeholder="Please select one..."
            />
        );
    };

    const renderItem = (item: ListItemType, index: number) => {
        if (itemComponent) {
            return itemComponent(item, selected, index);
        }
        return <ListItemComponent item={item} selected={selected} />;
    };

    const renderSearch = () => {
        if (searchComponent) {
            return searchComponent(
                items,
                (filteredItems) => console.log(filteredItems),
                () => setViewVisible(false),
                () => setViewVisible(false),
                "Type to search..."
            );
        }
        return (
            <SearchComponent
                items={items}
                onSearchPress={(filteredItems) => console.log(filteredItems)}
                onBackPress={() => setViewVisible(false)}
                onClosePress={() => setViewVisible(false)}
                placeholder="Type to search..."
            />
        );
    };

    return (
        <>
            <TouchableOpacity onPress={() => setViewVisible(true)}>
                {renderSelect()}
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={viewVisible}
                {...(config?.modalProps ?? {})}
            >
                <SafeAreaView style={ModalStyles.container}>
                    {renderSearch()}

                    <KeyboardAvoidingView
                        style={ModalStyles.keyboardContainer}
                        behavior={Platform.OS === "ios" ? "padding" : undefined}
                        enabled
                    >
                        <View style={ModalStyles.listArea}>
                            <FlatList
                                data={items ?? []}
                                keyExtractor={(item) => item.value as string}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                            flexDirection: "column",
                                        }}
                                        onPress={() => {
                                            onSelect(item, index);
                                            setViewVisible((state) => !state);
                                        }}
                                    >
                                        {renderItem(item, index)}
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </Modal>
        </>
    );
}

export { ModalComponent };
