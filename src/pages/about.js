import React from "react";
import "../css/about.css"
import Grid from '@material-ui/core/Grid';
function About() {
    return (
        <div>
            <div className="about" id="about">
                <Grid item xs="12">
                    <div className="about-heading">About</div>
                </Grid>
                <p className="para"> I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>

            </div>
            <div className="about-image" id="rooms">
                <img src="https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_631,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp"></img>
                <div class="centered">
                    <div>
                        <Grid item xs="12">
                            <div className="About-room" >Our Rooms</div>
                        </Grid>
                        <div className="paragraph"> I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                        <button className="book-room">Book a Room</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;