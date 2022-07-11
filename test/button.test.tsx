import React from 'react'
import { screen, render } from '../src/utils/test-utils'
import { Button } from '../src/components/Button'

import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should render button', async () => {
    const mockonClick = jest.fn();
    render(<Button onClick={mockonClick}>teste</Button>)

    await userEvent.click(screen.getByText(/teste/i));

    expect(mockonClick).toHaveBeenCalledTimes(1);
    expect(
      screen.getByText(/teste/i)).toHaveStyle({ 'border-radius': '30px' });
  })
})
