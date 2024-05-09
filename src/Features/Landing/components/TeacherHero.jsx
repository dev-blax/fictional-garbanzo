import React from "react";
import { FaGlobe } from "react-icons/fa";
import { GiFlexibleStar } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiCreativeCommonsSaFill } from "react-icons/ri";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import { FaAddressBook } from "react-icons/fa";

import {
  List,
  ListItem,
  ListItemPrefix,

} from "@material-tailwind/react";

function TeacherHero() {
  return (
    <div className=" flex flex-col md:flex-row max-w-7xl mx-auto ">
      <div className=" w-full flex flex-col  items-start text-center md:text-start px-4 md:px-0 py-4 md:py-0 justify-center gap-8">
        <div className="">
          <header className=" text-5xl font-bold mb-3 ">
            If you are a Certified teacher then,{" "}
            <span className=" text-daffodil"> Become an Instructor </span>
          </header>

          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit quasi ea eius nostrum quae sed aliquid natus, nesciunt
            fugit mollitia fuga tenetur, ex quod? Officiis architecto facere
            amet, tenetur non illo iure vitae porro laudantium.
          </p>
        </div>

        <div className=" flex flex-col gap-5 items-center">
          <header className="text-5xl font-bold font-sans">
            {" "}
            Enjoy many perks
          </header>
          <div className=" flex flex-col md:flex-row">
            <List>
              <ListItem>
                <ListItemPrefix>
                  <FaGlobe className=" text-daffodil" />
                </ListItemPrefix>
                Global Impact
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <GiFlexibleStar className=" text-daffodil" />
                </ListItemPrefix>
                Flexible Schedule
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <LiaChalkboardTeacherSolid className=" text-daffodil" />
                </ListItemPrefix>
                Innovative Teaching Tools
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaAward className=" text-daffodil" />
                </ListItemPrefix>
                Recognition and Reputation
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemPrefix>
                  <RiCreativeCommonsSaFill className=" text-daffodil" />
                </ListItemPrefix>
                Creative Freedom
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineMonetizationOn className=" text-daffodil" />
                </ListItemPrefix>
                Monetize your expertize
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaPersonCircleCheck className=" text-daffodil" />
                </ListItemPrefix>
                Professional Development
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <LiaNetworkWiredSolid className=" text-daffodil" />
                </ListItemPrefix>
                Networking Opportunities
              </ListItem>
            </List>
          </div>

          <Button className=" bg-daffodil "> Become an Instructor </Button>
        </div>
      </div>

      <div className=" w-full">
        <img src="/images/teacher-edit.png" alt="" />
      </div>
    </div>
  );
}

export default TeacherHero;
