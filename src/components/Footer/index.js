import React from 'react';

function Footer() {
    return (
        <footer className="py-3 border-top border-secondary">
            <ul className="nav justify-content-center align-items-center">
                <li className="nav-item">
                    <a className="nav-link text-muted d-flex align-items-center"
                        target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/stephon-treadwell/">
                        <i className="bi bi-linkedin fs-2"></i>
                        <span className='ms-2'>Stephon Treadwell</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-muted d-flex align-items-center"
                        target="_blank" rel="noopener noreferrer" href="https://github.com/StephonT">
                        <i className="bi bi-github fs-2"></i>
                        <span className='ms-2'>StephonT</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;