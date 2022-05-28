import './Footer.scss';

export const Footer = () => (
    <footer className="footer">
        <div className="footer__info">
            <span className="footer__title">Карта повітряних тривог</span>
            <span className="footer__desc">Автооновлення кожні 15 секунд</span>
            {/* <span className="footer__desc">
                Векторна мапа:
                <a href="/" target="_blank">
                    Rino ap Codkelden
                </a>
            </span> */}
        </div>
    </footer>
);
