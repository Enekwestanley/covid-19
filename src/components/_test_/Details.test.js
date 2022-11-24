import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../Redux/configureStore';
import Details from '../details/Details'

describe('Details', () => {
  test('renders Details component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Details')).toBeInTheDocument();
  });
})
