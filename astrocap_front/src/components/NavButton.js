// NavButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavButton.css';

const NavButton = ({ name, onClick }) => {
    return (
        <button onClick={onClick} className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;{name}&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;{name}&nbsp;</span>
        </button>
    );
};

export default NavButton;
