import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootStore } from './store/store';
import { Container } from './components/Container';

import './style/index.scss';

ReactDOM.render(
    <Provider store={rootStore}>
        <Container />
    </Provider>,
    document.getElementById('root'),
);
