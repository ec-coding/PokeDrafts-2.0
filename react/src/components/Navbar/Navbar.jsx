import React from 'react';
import { useNavigate } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
    const navigate = useNavigate();
    const viewNavigate = (newRoute) => {
      // Navigate to the new route
      if (!document.startViewTransition) {
        return navigate(newRoute);
      } else {
        return document.startViewTransition(() => {
          navigate(newRoute);
        });
      }
    };

    return (
        <nav class="navbar row">
            <ul class="left col">
                <img id="title-img" src="https://i.imgur.com/HgSy1Gq.png" alt="trim-images" border="0" />
                <li>
                    <button class="text-light"
                    >
                        <a href="/">
                            Home
                        </a>
                    </button>
                </li>
            </ul>
            <ul class="right col">
                <li className='li-left'>
                    <button class="text-light"
                        onClick={() => {
                            viewNavigate("/signup");
                        }}
                    >
                        Sign Up
                    </button>
                </li>
                <li className='li-right'>
                    <button class="text-light"
                        onClick={() => {
                            viewNavigate("/login");
                        }}
                    >
                        Login
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
