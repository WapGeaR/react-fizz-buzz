import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Looking for Fizz', () => {
  const app = shallow(<App />)
  const fizz = <div>Fizz</div>;
  expect(app.contains(fizz)).toEqual(true);
})

it('Looking for Buzz', () => {
  const app = shallow(<App />)
  const buzz = <div>Buzz</div>;
  expect(app.contains(buzz)).toEqual(true);
})

it('Looking for FizzBuzz is not found', () => {
  const app = shallow(<App />)
  const fizzbuzz = <div>FizzBuzz</div>;
  expect(app.contains(fizzbuzz)).toEqual(false);
})

it('Change state and try to find FizzBuzz again', () => {
  const app = shallow (<App />)
  app.setState({count: 15})
  const fizzbuzz = <div>FizzBuzz</div>;
  expect(app.contains(fizzbuzz)).toEqual(true);
})
it('Update state from input', () => {
  const app = shallow (<App />)
  app.find('#input').simulate('change', {target: {value: 18}});
  app.find('#button').simulate('click');
  expect(app.state().count).toEqual(18);
})
