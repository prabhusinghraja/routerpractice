import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="firstrow">
                    <div className="services">
                        <h2>Services</h2>
                        <ul>
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Hosting</li>
                        </ul>
                    </div>
                    <div className="about">
                        <h2>About</h2>
                        <ul>
                            <li>Company</li>
                            <li>Team</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div className="secondrow">
                    <div className="div1">
                        <h2 className="cname">Fire Resort</h2>
                        <p className="firelorem">
                            Fire resort Lorem ipsum dolor Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Hic ullam harum
                            iusto nam aut rem fuga. Illum blanditiis doloremque,
                            dolorum maiores earum quod. Dignissimos, dolorem
                            facilis eaque repellendus consectetur molestiae. sit
                            amet consectetur adipisicing elit. Nulla sint iusto
                            corporis praesentium ex at debitis exercitationem
                            dolor, architecto nostrum est dignissimos
                            perspiciatis adipisc
                        </p>
                    </div>
                </div>
                <div className="copyright">
                    <p>Fire Restaurant &copy; 2023</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
