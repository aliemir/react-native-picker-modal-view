// Global Imports
import { TextInputProps } from "react-native";

export interface ISearch {
    onClose: () => void;
    onBackRequest?: () => void;
    forceSelect: boolean;
    setText: (text: string) => void;
    searchText: string;
    SearchInputProps?: TextInputProps;
    backButtonDisabled?: boolean;
}
