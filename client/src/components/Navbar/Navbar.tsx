import { Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
      <Container>
        <ul>
          <li>подбор по авто</li>
          <li>шины</li>
          <li>диски</li>
          <li>услуги</li>
          <li>покупателю</li>
          <li>контакты</li>
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;
