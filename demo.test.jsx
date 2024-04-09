/**@jest-environment jsdom */

import TextField from '@mui/material/TextField';
import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

it('uses a text field via fireEvent', async () => {
    render(<TextField label="Value"/>);

    const input = screen.getByLabelText('Value');
    fireEvent.change(input, {target: {value: 'Hello'}});
    expect(input.value).toEqual('Hello');
});

it('uses a text field via user-event', async () => {
    render(<TextField label="Value"/>);

    const input = screen.getByLabelText('Value');
    await userEvent.type(input, 'Hello');
    expect(input.value).toEqual('Hello');
});
