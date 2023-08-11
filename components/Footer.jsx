import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsMailbox2 } from "react-icons/bs";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="footer">
      <div className="leftFooter">
        <h1>Get in Touch</h1>
        <div className="mosa-details">
          <div className="location df detail-cat">
            <div className="icon">
              <MdLocationOn />
            </div>
            <div className="details">Plot kireka Kira Municipality</div>
          </div>
          <div className="location df detail-cat">
            <div className="icon">
              <BsMailbox2 />
            </div>
            <div className="details">P.0 BOX 321 Mengo</div>
          </div>
          <div className="location df detail-cat">
            <div className="icon">
              <AiOutlinePhone />
            </div>
            <div className="details">+25672891921</div>
          </div>
          <div className="location df detail-cat">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="details">mengoalumni@gmail.com </div>
          </div>
        </div>
      </div>
      <div className="midFooter">
        <h1>POPULAR</h1>
        <div className="popular-events">
          <div className="top-popular-sectn df">
            <p className="news">News</p>
            <p className="date">Sun Jul 02 2023</p>
          </div>
          <div className="bottm-popular-sectn">
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
        <div className="popular-events">
          <div className="top-popular-sectn df">
            <p className="news">News</p>
            <p className="date">Sun Jul 02 2023</p>
          </div>
          <div className="bottm-popular-sectn">
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
        <div className="popular-events">
          <div className="top-popular-sectn df">
            <p className="news">News</p>
            <p className="date">Sun Jul 02 2023</p>
          </div>
          <div className="bottm-popular-sectn">
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
      </div>
      <div className="midFooter">
        <h1>Follow Us</h1>
        <div className="socials"></div>
      </div>
    </div>
  );
}
