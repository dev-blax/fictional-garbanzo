import React from 'react'
import ClassCard from './ClassCard';
import { Typography } from "@material-tailwind/react";


function PopularClasses() {
  return (
    <div className=" bg-gradient-to-tl from-daffodil to-tangerine py-12">
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
          hic aliquid ea impedit vitae odio! Ea optio voluptatem itaque natus
          hic alias officia, illum maxime sint incidunt pariatur veritatis,
          eveniet dolores obcaecati facilis beatae, non recusandae a.{" "}
        </Typography>

        <div className=" flex max-w-7xl mx-auto justify-around ">
          {/* class card */}

          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </div>
  )
}

export default PopularClasses