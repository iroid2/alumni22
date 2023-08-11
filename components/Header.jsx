"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

import { BiSearchAlt } from "react-icons/bi";
import { BsFillTelephoneForwardFill, BsFillChatTextFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  function handleNav() {
    setShowNavigation(!showNavigation);
  }
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
          <BiSearchAlt className=" center headIcon" />
        </div>
        <div className="navBar df spaceBtn ">
          <div
            className={
              showNavigation ? "nav-links showNav center " : "nav-links center "
            }
          >
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>News</Link>
            <Link href={"#"}>Articles</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Profiles</Link>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>Gallery</Link>
            <Link href={"#"}>Shop</Link>
          </div>
          <div className="ctaBtn">
            <button>Register</button>
          </div>
        </div>
      </div>
      <div className="hiddenMen ">
        <TfiMenu onClick={handleNav} className="hamMenu " />
      </div>
    </div>
  );
}
