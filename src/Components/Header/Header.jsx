import './Header.scss';
import {Container} from '../Container/Container';

export default function Header () {
    return (
        <header className='Header'>
            <Container>
                <span className='Logo'>AppCo</span>
            </Container>
        </header>
    )
}