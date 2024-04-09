/**@jest-environment jsdom */

import TextField from '@mui/material/TextField';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

it('uses a text field', async () => {
    render(<TextField label="Value"/>);

    const input = screen.getByLabelText('Value');
    await userEvent.type(input, 'Hello');
    expect(input.value).toEqual('Hello');
});
