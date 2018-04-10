/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
})

// describe('componentDidMount', () => {
//     it('should call getIngredients', () => {
//       expect(apiCalls.getIngredients).toHaveBeenCalled();
//     });

//     it('should call getIngredientNames with an array of raw ingredients', () => {
//       const mockRawIngredients = [{
//         id: 1,
//         category: 'food',
//         duration: '0:30',
//         effect: null,
//         hearts: '0.5',
//         name: 'Apple',
//         resale: '3',
//         type: 'Fruit',
//         created_at: '2018-04-07T02:42:46.591Z',
//         updated_at: '2018-04-07T02:42:46.591Z'
//       }]
//       expect(dataCleaner.getIngredientNames).toHaveBeenCalledWith(mockRawIngredients)
//     });

//     it('should setState of ingredients to be an array of cleaned ingredients', () => {
//       const mockIngredients = [{
//         name: 'Apple',
//         id: 1
//       }]
//       expect(wrapper.state().ingredients).toEqual(mockIngredients)
//     });
//   });
