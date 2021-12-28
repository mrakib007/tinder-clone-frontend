import React from 'react';
import './Header.css';
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
            </IconButton>
            <img 
            className='header__logo'
            // src='https://tinder.com/static/tinder.png'
            src='https://cdn.branch.io/branch-assets/1518742072935-og_image.png'
            alt='tinder'>
            </img>

            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'></ForumIcon>
            </IconButton>
        </div>
    );
};

export default Header;