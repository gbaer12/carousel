import { render, screen } from '@testing-library/react';
import App from './App';
import "./Card.css";

/** Smoke Test */
it('it renders without crashing', () => {
    render(<Card />)
});
  
/** Snapshot Test */
it('should match snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});