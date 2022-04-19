import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Container } from './components/Container';
import { GlobalStore } from './store/GlobalStore';

import './style/index.scss';

ReactDOM.render(
    <Provider store={GlobalStore}>
        <Container />
    </Provider>,
    document.getElementById('root'),
);
