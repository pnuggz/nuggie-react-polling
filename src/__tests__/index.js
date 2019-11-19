import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Example from '../index';

const idProp = 'nuggie-tooltip-default';
const text = 'Hey There';
const children = 'Hover over me';

afterEach(cleanup);

test('renders the children properly', () => {
  const App = () => <Example tooltipRender={text}>{children}</Example>;
  const { getByText } = render(<App />);
  expect(getByText(children).innerHTML).toBe(children);
});

test('does not render tooltip initially', () => {
  const App = () => <Example tooltipRender={text}>{children}</Example>;
  const { getByTestId } = render(<App />);
  expect(getByTestId(idProp).innerHTML).toBe('');
});

test('renders tooltip on mouseenter and hides on mouseleave', () => {
  const App = () => <Example tooltipRender={text}>{children}</Example>;
  const { getByText, getByTestId } = render(<App />);
  fireEvent(
    getByText(children),
    new MouseEvent('mouseenter', {
      bubbles: true,
    }),
  );
  expect(getByText(text).textContent).toBe(text);
  fireEvent(
    getByText(children),
    new MouseEvent('mouseleave', {
      bubbles: true,
    }),
  );
  expect(getByTestId(idProp).textContent).toBe('');
});

test('renders tooltip on focus and hides on blur', () => {
  const App = () => <Example tooltipRender={text}>{children}</Example>;
  const { getByText, getByTestId } = render(<App />);
  fireEvent(
    getByText(children),
    new Event('focus', {
      bubbles: true,
    }),
  );
  expect(getByText(text).textContent).toBe(text);
  fireEvent(
    getByText(children),
    new Event('blur', {
      bubbles: true,
    }),
  );
  expect(getByTestId(idProp).textContent).toBe('');
});
