import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';


describe("App component",()=>{
  it('starts with count=0', ()=>{
    const wrapper=shallow(<App/>);
    const text = wrapper.find('p').text();
    expect(text).toEqual("Count: 0")
  });

  it('increments count by 1 when clicking the increment button', ()=>{
    const wrapper = shallow(<App/>);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  })

  it('decrements count by 1 when clicking decrement button', ()=>{
    const wrapper = shallow(<App/>);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text =wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  })

  it('matches the snapshot', ()=>{
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})