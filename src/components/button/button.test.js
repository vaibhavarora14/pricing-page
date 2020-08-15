import { render, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import Button from './button';

describe("button tests", () => {
    test('styles prop of button', () => {
        const { getByTestId } = render(<Button data-testid="random" style={{ marginBottom: '1.9rem' }}>Click me!</Button>)

        expect(getByTestId('random').style.marginBottom).toBe('1.9rem');
    });

    test('click of button', (done) => {
        function handleClick() {
            done();
        }
        const { getByTestId } = render(<Button data-testid="random" click={handleClick}>Click me!</Button>)

        fireEvent.click(getByTestId('random'));
    });
})

afterEach(cleanup);