// Global Imports
import * as React from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

// Local Imports
import { SearchStyle } from "@Styles";
import { ISearch } from "@Interfaces";

import leftArrow from "@Images/left-arrow.png";

export class SearchComponent extends React.PureComponent<ISearch, {}> {
    public render(): JSX.Element {
        const {
            SearchInputProps,
            onClose,
            setText,
            forceSelect,
            searchText,
            onBackRequest,
            backButtonDisabled,
        } = this.props;
        return (
            <View style={SearchStyle.searchArea}>
                {!backButtonDisabled &&
                    this.touchableOpacityButton(
                        onBackRequest,
                        leftArrow,
                        SearchStyle.leftBtn,
                        SearchStyle.backButton
                    )}
                <TextInput
                    placeholder={searchText}
                    style={[
                        SearchStyle.textInput,
                        forceSelect && SearchStyle.nonCloseButton,
                        backButtonDisabled && SearchStyle.nonBackButton,
                    ]}
                    underlineColorAndroid={"transparent"}
                    onChangeText={(text: string) => setText(text)}
                    {...SearchInputProps}
                />
                {!forceSelect &&
                    this.touchableOpacityButton(
                        onClose,
                        require("../Assets/Images/close.png"),
                        SearchStyle.leftBtn,
                        SearchStyle.closeButton
                    )}
            </View>
        );
    }
    public touchableOpacityButton(
        onPress,
        imgSrc,
        buttonStyle,
        imgStyle
    ): JSX.Element {
        return (
            <TouchableOpacity onPress={() => onPress()} style={buttonStyle}>
                <Image source={imgSrc} style={imgStyle} />
            </TouchableOpacity>
        );
    }
}
