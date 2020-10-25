# Breaking Changes

## API Difference - Props

-   **sort?**= { boolean | (a,b) => number; }

    -   **undefined:** no sorting (default value = true)
    -   **boolean:** has sorting or not
    -   **(a,b) => number:** custom sorter function

-   **search?**={ boolean | (query, element) => boolean; | React.Element<{items: Item[], onSearch: () => Item[]}>}

    -   **undefined:** default search functionality and element
    -   **boolean:** has search or not
    -   **(query, element) => boolean:** custom filter function
    -   **React.Element<{items, onSearch}>:** custom search element

-   **config?**={{ modalProps, inputProps, flatListProps }}

-   **disabled?**={boolean}

-   **selected?**={item}

-   **onSelect?**={(item, index) => void;}

-   **onBack?**={boolean | () => void;}

    -   **boolean:** show back button or not
    -   **() => void:** callback function

-   **onClose?**={boolean | () => void;}

    -   **boolean:** show close button or not
    -   **() => void:** callback function

-   **items\***={item[]}

-   **itemComponent?**={React.Element<{item, selected, index}>}

-   **selectComponent?**={React.Element<{selected}>}

-   **scrollToTop?**={boolean | React.Element<{onToTop: () => void}>}

-   **keyIndex?**={string}

-   **indexList?**={boolean | string[] | (item, index, items) => string | undefined}

    -   **boolean:** show alphabetical index or not
    -   **string[]** custom index list to show
    -   **(item, index, items) => string?:** custom map function to generate index chars from the items array

-   **locale?**={{ selectPlaceholder: string, searchPlaceholder: string }}

## deprecated

-   ~~renderSearch~~: use search

-   ~~backButtonDisabled~~: use onBack prop

-   ~~autoSort~~: use sort instead

-   ~~selectPlaceholderText~~: use locale

-   ~~searchPlaceholderText~~: use locale

-   ~~onEndReached~~: use config.flatListProps

-   ~~sortingLanguage~~: use sort

-   ~~showToTopButton~~: scrollToTop

-   ~~autoGenerateAlphabeticalIndex~~: use indexList prop

-   ~~keyExtractor~~: use config.flatListProps

-   ~~searchInputTextColor~~: use search prop

-   ~~alphabeticalIndexChars~~: use indexList prop

-   ~~renderListItem~~: itemComponent

-   ~~renderSelectView~~: selectComponent

-   ~~onBackButtonPressed~~: onBack

-   ~~onClosed~~: onClose

-   ~~showAlphabeticalIndex~~: use indexList prop

-   ~~modalAnimationType~~: use config.modalProps
