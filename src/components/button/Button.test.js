import { render, screen } from '@testing-library/react';
import { Button } from './Button';
/* script de teste do componente "button",deve renderizar um botao com texto
*/
test('renders button with text', () => {
  render(<Button>Test</Button>);

  const buttonEl = screen.getByText(/Test/i);
  // comportamento do que é esperado
  expect(buttonEl).toBeInTheDocument();
});
