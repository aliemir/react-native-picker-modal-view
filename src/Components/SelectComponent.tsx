// Global Imports
import * as React from "react";
import { View, Text, Image } from "react-native";

// Local Imports
import { SelectBoxStyle } from "@Styles";
import downArrow from "@Images/down.png";

export interface ISelectComponentProps {
    selected?: {
        label: string;
    };
    disabled: boolean;
    placeholder: string;
}

export const SelectComponent: React.FC<ISelectComponentProps> = ({
    selected,
    disabled,
    placeholder,
}) => {
    return (
        <View style={SelectBoxStyle.container}>
            <Text
                style={[
                    disabled
                        ? SelectBoxStyle.disabledTxt
                        : SelectBoxStyle.chooseText,
                ]}
            >
                {selected?.label ?? placeholder}
            </Text>
            <Image
                source={downArrow}
                style={[
                    SelectBoxStyle.downBtn,
                    disabled && SelectBoxStyle.disabledImage,
                ]}
            />
        </View>
    );
};
