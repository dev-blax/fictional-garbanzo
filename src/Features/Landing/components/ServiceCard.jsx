import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className=" flex gap-3 items-center">
      <div className=" p-3 rounded-full bg-tangerine ">
        {icon}
      </div>

      <div>
        <p className=" font-semibold mb-2 text-sm "> {title} </p>
        <p className=" text-xs">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
