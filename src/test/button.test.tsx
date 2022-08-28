import Button from '@shared/components/Button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button', () => {
  it('should call onclick prop when clicked', () => {}),
    async () => {
      const handleClick = jest.fn();
      render(<Button onBtnClick={handleClick} buttonText="Find Result" />);
      await fireEvent.click(screen.getByText(/Find Result/i));
      expect(handleClick).toHaveBeenCalledTimes(1);
    };
});
