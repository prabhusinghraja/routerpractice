import React from "react";
import hotel from "./images/pexels-lisa-fotios-1126728.jpg";
import "./About.css";

const About = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className="us">About us</h2>
                </div>
                <div className="hotel">
                    <p className="p">
                        A restaurant is any establishment where patrons can buy
                        and consume food and beverages. While a restaurant might
                        offer food and drink to take away or for delivery, this
                        type of business is characterized by providing somewhere
                        where guests can sit down for a meal.
                    </p>
                    <img src={hotel} alt="Hotel" />
                </div>
            </div>
        </>
    );
};

export default About;
