import './Footer.scss';
import {Container} from '../Container/Container';

export default function Footer() {
    return (
        <footer className="Footer">
            <Container>
                <div className="FooterContent">
                    <span className='LogoFooter'>AppCo</span>
                    <span>All rights reserved by ThemeTags</span>
                    <span>Copyrights © 2019.</span>
                </div>
            </Container>
        </footer>
    )
}