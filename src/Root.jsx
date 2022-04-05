import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'

const Root = ({store, persistor}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default Root;