// Global Imports
import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Local Import
import { IListItemInDto } from "@Interfaces";
import { ListItemStyle } from "@Styles";

export const ListItemComponent = ({ item, selected }) => {
    return (
        <View style={ListItemStyle.btnContainer}>
            <Text
                style={[
                    selected &&
                        selected.label === item.label &&
                        ListItemStyle.selected,
                ]}
            >
                {item.label}
            </Text>
        </View>
    );
};
