import React from 'react';
import { App } from 'App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import { store } from 'store';

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();

