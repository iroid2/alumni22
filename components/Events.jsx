import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
export default function Events() {
  return (
    <div className="events">
      <h1>UP COMING EVENTS</h1>
      <div className="eventsCards">
        <Link href={"#"} className="eventCard">
          <div className="month">Aug</div>
          <div className="day-of-the-month">8th</div>
          <Link href={"#"} className="event-title">
            Lorem ipsum dolor sit.lorem4 ipsum dolor sit.lorem4 ipsum dolor
            sit.lorem4{" "}
            <span className="title-arr">
              <FiArrowUpRight />
            </span>
          </Link>
          <div className="event-details ">
            <div className="date event-det df">
              <div className="date-icon">
                <BsCalendar2Event />
              </div>
              <div className="date-details">
                <p>Tuesday,August 8,2023</p>
                <p>3:30PM-4-30PM PDT</p>
              </div>
            </div>
            <div className="date event-det df">
              <div className="date-icon ">
                <ImLocation2 />
              </div>
              <div className="date-details">
                <p>In person & online</p>
              </div>
            </div>
            <div className="date event-det df">
              <div className="date-icon">
                <AiOutlineUser />
              </div>
              <div className="date-details">
                <p>Organiser |MASO food Hub</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"#"} className="eventCard">
          <div className="month">Aug</div>
          <div className="day-of-the-month">8th</div>
          <Link href={"#"} className="event-title">
            Lorem ipsum dolor sit.lorem4 ipsum dolor sit.lorem4 ipsum dolor
            sit.lorem4{" "}
            <span className="title-arr">
              <FiArrowUpRight />
            </span>
          </Link>
          <div className="event-details ">
            <div className="date event-det df">
              <div className="date-icon">
                <BsCalendar2Event />
              </div>
              <div className="date-details">
                <p>Tuesday,August 8,2023</p>
                <p>3:30PM-4-30PM PDT</p>
              </div>
            </div>
            <div className="date event-det df">
              <div className="date-icon ">
                <ImLocation2 />
              </div>
              <div className="date-details">
                <p>In person & online</p>
              </div>
            </div>
            <div className="date event-det df">
              <div className="date-icon">
                <AiOutlineUser />
              </div>
              <div className="date-details">
                <p>Organiser |MASO food Hub</p>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"#"} className="eventCard">
          <div className="month">Aug</div>
          <div className="day-of-the-month">8th</div>
          <Link href={"#"} className="event-title">
            Lorem ipsum dolor sit.lorem4 ipsum dolor sit.lorem4 ipsum dolor
            sit.lorem4{" "}
            <span className="title-arr">
              <FiArrowUpRight />
            </span>
          </Link>
          <div className="event-details ">
            <div className="date event-det df">
              <div className="date-icon">
                <BsCalendar2Event />
              </div>
              <div className="date-details">
                <p>Tuesday,August 8,2023</p>
                <p>3:30PM-4-30PM PDT</p>
              </div>
            </div>
            <div className="date event-det df">
              <div className="date-icon ">
                <ImLocation2 />
              </div>
              <div className="date-details">
                <p>In person & online</p>
              </div>
            </div>
            <div className="date event-det df">
              <div className="date-icon">
                <AiOutlineUser />
              </div>
              <div className="date-details">
                <p>Organiser |MASO food Hub</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
