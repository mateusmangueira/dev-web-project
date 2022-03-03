import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render, unmountComponentAtNode } from 'react-dom';

import React from 'react';
import Input from './index';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

let container = null;

beforeEach(() => {
   // setar o inout do DOM como elemento a ser testado
  const input = document.createElement('input');
  container = document.body.appendChild(input);
});

afterEach(() => {
  // ao finalizar os testes reseta tudo
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Base tests', () => {
    test('input test', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Input />
          </BrowserRouter>,
  
          container
        );
      });
  
      const button = screen.getAllByTestId('delete-button')[0];
      expect(button).toBeInTheDocument();
      userEvent.click(button);
      expect(window.confirm).toBeCalled();
    });

  })
})