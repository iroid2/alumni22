import Image from "next/image";
import React from "react";

export default function ArchiveCard() {
  return (
    <>
      <div className="leftArchive">
        <Image src={"/images/achiv.jpg"} alt="" width={300} height={200} />
      </div>
      <div className="rightArchive">
        <h1>Lorem, ipsum.</h1>
      </div>
    </>
  );
}
