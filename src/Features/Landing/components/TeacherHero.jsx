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
    <div className=" flex max-w-7xl mx-auto ">
      <div className=" w-full flex flex-col justify-center gap-8">
        <div className="">
          <header className=" text-5xl font-bold mb-3 ">
            If you are a Certified man then,{" "}
            <span className=" text-daffodil"> Become a King </span>
          </header>

          <p className=" text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit quasi ea eius nostrum quae sed aliquid natus, nesciunt
            fugit mollitia fuga tenetur, ex quod? Officiis architecto facere
            amet, tenetur non illo iure vitae porro laudantium.
          </p>
        </div>

        <div>
          <header className="text-5xl font-bold font-sans">
            {" "}
            Enjoy many perks
          </header>
          <div className=" flex">
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

          <Button className=" bg-daffodil "> Become a King </Button>
        </div>
      </div>

      <div className=" w-full">
        <img src="/images/teacher-edit.png" alt="" />
      </div>
    </div>
  );
}

export default TeacherHero;