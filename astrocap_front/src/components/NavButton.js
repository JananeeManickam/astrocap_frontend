import React from 'react';
import './NavButton.css';

const NavButton = ({ name }) => {
    return (
        <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;{name}&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;{name}&nbsp;</span>
        </button>
    );
};

export default NavButton;
