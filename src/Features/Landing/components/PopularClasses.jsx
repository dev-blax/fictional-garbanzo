import React from "react";
import ClassCard from "./ClassCard";
import { Typography } from "@material-tailwind/react";

function PopularClasses() {
  return (
    <div className=" bg-gradient-to-tl from-daffodil to-tangerine py-12 px-4 md:px-0">
      <Typography variant="h4" className=" text-center text-white mb-3">
        {" "}
        Popular Classes{" "}
      </Typography>
      <Typography
        variant="small"
        className=" text-center max-w-3xl mx-auto mb-8 text-white"
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus,
        hic aliquid ea impedit vitae odio! Ea optio voluptatem itaque natus hic
        alias officia, illum maxime sint incidunt pariatur veritatis, eveniet
        dolores obcaecati facilis beatae, non recusandae a.{" "}
      </Typography>

      <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-0 max-w-7xl mx-auto justify-around ">
        {/* class card */}

        <ClassCard
          image="https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="Organic Chemistry"
          classCategory={"Advanced"}
          rating={4.9}
          numVideos={25}
          numStudents={185}
          price="Free"
          instructor={{
            image:
              "https://images.pexels.com/photos/4992382/pexels-photo-4992382.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Josephin Morgan",
          }}
        />
        <ClassCard
          classCategory={"Secondary"}
          image="https://images.pexels.com/photos/376689/pexels-photo-376689.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="Linear Programming"
          rating={4.9}
          numVideos={25}
          numStudents={2400}
          price="Free"
          instructor={{
            image:
              "https://images.pexels.com/photos/4045599/pexels-photo-4045599.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Micolas Leonard",
          }}
        />
        <ClassCard
          classCategory={"Primary"}
          image="/images/teach.jpg"
          className="Introduction to Divisions"
          rating={4.9}
          numVideos={25}
          numStudents={146}
          price="Free"
          instructor={{
            image:
              "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Qing Madi",
          }}
        />
      </div>
    </div>
  );
}

export default PopularClasses;
