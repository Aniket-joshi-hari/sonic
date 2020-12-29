import React from 'react';
import "../css/header.css";
function header() {
    return (
        <div className="Header">
            <div className="Header-Inner-Container">
                <div class="ui secondary  menu">
                    <a class=" item" >
                        HOME
                </a>
                    <a class="item" href="#about">
                        ABOUT
                 </a>
                    <a class="item" href="#rooms">
                        ROOMS
                </a>
                    <a class=" item" href="#services">
                        SERVICES
                </a>
                    <a class="item" href="#gallery">
                        GALLERY
                 </a>
                    <a class="item" href="#see">
                        SEE&DO
                </a>
                    <a class="item" href="#contact">
                        CONTACT
                 </a>
                    <a class="item" href="book-a-room">
                        <button className="header-button">Book A Room</button>
                    </a>

                </div>
            </div>
        </div>
    )
}
export default header;