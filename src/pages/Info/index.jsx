import React from 'react';
// css
import "./styles.css"

const Info = () => {
    return (
        <div id='info'>

            <div className="about-us">
                <h1>About Us</h1>
                <ul>
                    <li>Fun, easy way to stay in touch with friends</li>
                    <li>Always growing. We will continue to give updates to enhance user experience </li>
                </ul>
            </div>

            <div className="terms-and-conditions">
                <h1>Terms and Conditions</h1>
                <ul>
                    <li>No bullying</li>
                    <li>Be respectful</li>
                    <li>This platform will not be used for promotional purposes</li>
                    <li>We all come from different walks of life. Race religion and political talks are not prohibited, but please do so with that in mind </li>
                    <li>Keep it classy</li>
                    <li>Failure to abide by any of the stated rules will result in immediate deletion of your account</li>
                </ul>
            </div>

        </div>
    );
}

export default Info;
