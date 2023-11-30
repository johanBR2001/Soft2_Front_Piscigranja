import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Codigo from './Codigo';
import { MemoryRouter } from 'react-router-dom';

// Configure Enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });

describe('Codigo Component', () => {
  it('should handle form submission and API call', async () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ restaurante: {}, error: '' }),
      })
    );

    global.fetch = mockFetch;

    const wrapper = mount(
      <MemoryRouter>
        <Codigo />
      </MemoryRouter>
    );

    // Simulate user input
    wrapper.find('input').at(0).simulate('change', { target: { value: '1' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: '2' } });
    wrapper.find('input').at(2).simulate('change', { target: { value: '3' } });
    wrapper.find('input').at(3).simulate('change', { target: { value: '4' } });

    // Simulate form submission
    await act(async () => {
      wrapper.find('button').simulate('click');
    });

    // Ensure that the API call is made with the correct data
    expect(mockFetch).toHaveBeenCalledWith('http://127.0.0.1:8000/backend/verificar_codigo/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resultado: '1234',
      }),
    });

    // Ensure that the navigation is called if there is no error
    expect(mockNavigate).toHaveBeenCalledWith('/ResetContra');
  });
});
