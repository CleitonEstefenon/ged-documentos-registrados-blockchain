import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Externals
import { Chart } from 'react-chartjs-2';

// Material helpers
import { ThemeProvider } from '@material-ui/styles';

// ChartJS helpers
import { chartjs } from './helpers';

// Theme
import theme from './theme';

// Styles
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';

// Routes
import Routes from './Routes';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './config/reducers';
import Notification from 'components/Notification';

// Configure ChartJS
Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
    draw: chartjs.draw
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes />
                        <Notification />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App