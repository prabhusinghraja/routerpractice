import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <>
            <div className="form">
                <div>
                    <h2 className="head2">Contact us</h2>
                </div>
                <form action="">
                    <div className="form1">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Mobile" />
                    </div>
                    <div className="form2">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <input className="spl" type="text" placeholder="Message" />
                    <button className="btn1">Send</button>
                </form>
            </div>
        </>
    );
}

export default Contact;
