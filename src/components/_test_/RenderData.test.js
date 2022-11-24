import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../../Redux/configureStore';
import RenderData from '../renderData/RenderData';
import '@testing-library/jest-dom';

it('it works', () => {
  const tree = render(
    <Provider store={store}>
      <HashRouter>
        <RenderData total="100000" country="Ethiopia" />
      </HashRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
