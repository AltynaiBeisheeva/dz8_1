import React from 'react';
import './footer.css';

;

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <p>
                    Добро пожаловать{' '}
                    <a href="https://www.kinopoisk.ru/film/4889667/?utm_referrer=www.google.com">
                        на страницу фильма
                    </a>
                    .
                </p>
            </div>
            <div className="social-icons">
                <a href="#">
                    <img src="../img/facebook.svg" alt="Facebook" />
                </a>
                <span className="icon-spacing"></span> {/* Расстояние между иконками */}
                <a href="#">
                    <img src="../img/twitter.svg" alt="Twitter" />
                </a>
                <span className="icon-spacing"></span>
                <a href="#">
                    <img src="../img/instagram.svg" alt="Instagram" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
