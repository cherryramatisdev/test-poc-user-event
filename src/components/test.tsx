import React from 'react'
import { screen, render } from '../utils/test-utils'
import { Button } from './Button'

import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render button', () => {
    const mockonClick = jest.fn();
    render(<Button onClick={mockonClick}>teste</Button>)

    userEvent.click(screen.getByText(/teste/i));
    expect(mockonClick).toHaveBeenCalledTimes(1);
  })
})
