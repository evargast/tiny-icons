import { ActionButton, Provider } from "@adobe/react-spectrum";
import ColumnSettings from "@spectrum-icons/workflow/ColumnSettings";
import * as React from "react";
import { FC } from "react";
import SpectrumWhiteTheme from "spectrum-white-theme";

import "./styles.css";

interface AppProps {
    disabled?: boolean;
    onClick?: VoidFunction;
}

const App: FC<AppProps> = ({ onClick, disabled = false }) => {
    return (
        <Provider theme={SpectrumWhiteTheme} colorScheme="light">
            <div className="App">
                <h1>Hello World! This is a React app using React Spectrum!</h1>
                <h2>Check the tiny icon below</h2>
                <ActionButton
                    aria-label="Column visibility popover"
                    justifySelf="end"
                    isDisabled={disabled}
                    onPress={onClick}
                >
                    <ColumnSettings />
                </ActionButton>
            </div>
        </Provider>
    );
};

export default App;
