import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CountryPage from '../components/CountryPage';

window.scrollTo = jest.fn();

describe('Component for Detail Page', () => {
  it('should render correctly', async () => {
    window.scrollTo.mockClear();
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <CountryPage />
        </Provider>
        ,
      </BrowserRouter>,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
