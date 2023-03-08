import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
 
import Homepage from '../screens/Homepage';
 
afterEach(cleanup);
 
describe('App', () => {

  it('should find the input feild via testId', () => {
    const testIdName = 'inputFeild';
 
    const {getByTestId} = render(<Homepage />);
 
    const foundInputFeild = getByTestId(testIdName);
 
    expect(foundInputFeild).toBeTruthy();
  });
  it('should find the button via testId', () => {
    const testIdName = 'submitButton';
 
    const {getByTestId} = render(<Homepage />);
 
    const foundButton = getByTestId(testIdName);
 
    expect(foundButton).toBeTruthy();
  });

  it('should find the button title', () => {
    const title = 'Submit';
 
    const {getByText} = render(<Homepage />);
 
    const foundButtonTitle = getByText(title);
 
    expect(foundButtonTitle.props.children).toEqual(title);
  });
});