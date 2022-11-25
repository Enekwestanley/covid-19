import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Details from '../details/Details';
import store from '../../Redux/configureStore';
import '@testing-library/jest-dom';

jest.mock('../../Redux/covidData/countriesCovidData.js');

it('it works', () => {
  const tree = render(
    <Provider store={store}>
      <HashRouter>
        <Details />
      </HashRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <HashRouter>
        <Details />
      </HashRouter>
    </Provider>,
  );
  expect(screen.getByText('***Loading***')).toBeInTheDocument();
});
