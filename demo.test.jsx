/**@jest-environment jsdom */

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

it('uses a text field', async () => {
    render(<TextField label="Value"/>);

    const input = screen.getByLabelText('Value');
    await userEvent.type(input, 'Hello');
    expect(input.value).toEqual('Hello');
});