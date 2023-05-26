import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-router-dom';
import Landing from './Landing'


test('should navigate to why page', () => {
  
  const { getByText } = render(
    <BrowserRouter>
      <Landing navigateToWhy={navigateToWhy} />
    </BrowserRouter>
  );

  
  fireEvent.click(getByText('Click me'));

 
  expect(navigateToWhy).toHaveBeenCalled();
});
