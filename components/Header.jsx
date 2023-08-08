import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import {
  AiFillFacebook,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillTelephoneForwardFill, BsFillChatTextFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

export default function Header() {
  return (
    <div className="header df">
      <div className="leftHeader center">
        <Image
          className=""
          src={"/images/mosa.jpg"}
          alt=""
          width={100}
          height={120}
        />
        <h1>MOSA</h1>
      </div>
      <div className="rightHeader ">
        <div className="banner  f-end ">
          <p className="center">
            Contact Us <BsFillChatTextFill className="center headIcon" />
          </p>
          <p className="center">
            Get Invloved <IoIosInformationCircle className="center headIcon" />{" "}
          </p>
          <button>Make a Gift</button>
          <BiSearchAlt className="center headIcon" />
        </div>
        <div className="navBar df spaceBtn ">
          <div className="nav-links center ">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>News</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>About</Link>
          </div>
          <div className="ctaBtn">
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className="hiddenMen ">
        <TfiMenu className="hamMenu " />
      </div>
    </div>
  );
}
