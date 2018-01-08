import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () =>{
  it('Renders without crashing', () =>{
    shallow(<Game />);
  });

  it('can start a new game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [10, 30, 20, 50],
      feedback: 'Cold',
      auralStatus: 'Congratulation',
      correctAnswer: 20
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('auralStatus')).toEqual('');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100); 
  });
})