import { fireEvent, render, screen } from '@testing-library/react';
import Result from '../pages/Result';

// Elements rendered Check
describe('Result Test Suite', () => {
  it('should contains the input elements and button', () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    const button = screen.getByText(/Find Result/i);

    expect(personInput).toBeTruthy();
    expect(relativeInput).toBeTruthy();
    expect(button).toBeTruthy();
  });
});

// Invalid input check
describe('Result Test Suite', () => {
  it('should throw error when the names are the same', () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    fireEvent.change(personInput, { target: { value: 'Kriya' } });
    fireEvent.change(relativeInput, { target: { value: 'kriya' } });
    fireEvent.click(screen.getByText(/Find Result/i));
    expect(screen.getByText(/Both the names are same/i));
  });
});

// Invalid input check
describe('Result Test Suite', () => {
  it('should throw error when the names are not in the family tree', () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    fireEvent.change(personInput, { target: { value: 'Kriya' } });
    fireEvent.change(relativeInput, { target: { value: 'asdfasd' } });
    fireEvent.click(screen.getByText(/Find Result/i));
    expect(screen.getByText(/Please enter the names in the family tree/i));
  });
});

// Success
describe('Result Test Suite', () => {
  it('should render the relationship properly for people with 1 generation gap', () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    fireEvent.change(personInput, { target: { value: 'Kriya' } });
    fireEvent.change(relativeInput, { target: { value: 'Satvy' } });
    fireEvent.click(screen.getByText(/Find Result/i));
    expect(screen.getByText(/Paternal Aunt/i));
  });
});

// Success
describe('Result Test Suite', () => {
  it('should render the relationship properly for people in the same generation', () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    fireEvent.change(personInput, { target: { value: 'Kriya' } });
    fireEvent.change(relativeInput, { target: { value: 'Misa' } });
    fireEvent.click(screen.getByText(/Find Result/i));
    expect(screen.getByText(/Cousins/i));
  });
});

// Success
describe('Result Test Suite', () => {
  it('should render the relationship properly for people with 2 or more generation gap', () => {
    render(<Result />);
    const personInput = screen.getByTestId(/person-name/i);
    const relativeInput = screen.getByTestId(/relative-name/i);
    fireEvent.change(personInput, { target: { value: 'Kriya' } });
    fireEvent.change(relativeInput, { target: { value: 'vyan' } });
    fireEvent.click(screen.getByText(/Find Result/i));
    expect(screen.getByText(/GrandFather/i));
  });
});
