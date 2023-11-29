import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router-dom';

import Login from './login';

configure({ adapter: new Adapter() });

describe('Login Component', () => {
    it('should render the login form', () => {
        const wrapper = shallow(
            <MemoryRouter>
              <Login />
            </MemoryRouter>
          );
      expect(wrapper).toMatchSnapshot();
    });

    it('should handle email input change', () => {
        const wrapper = shallow(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
        const emailInput = wrapper.find('input[type="email"]');
        emailInput.simulate('change', { target: { value: 'test@example.com' } });
        expect(wrapper.state('email')).toEqual('test@example.com');
      });
});