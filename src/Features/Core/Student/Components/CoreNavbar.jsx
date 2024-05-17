import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { MdDashboard } from "react-icons/md"; 
import { FaStar } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
export function CoreNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <MdDashboard className=" text-gray-600" />
        
 
        <a href="/student/" className="flex items-center">
          Dashboard
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <FaStar className=" text-gray-600" />
        <a href="/student/enrolled" className="flex items-center">
          Enrolled Classes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <FaChalkboardTeacher className=" text-gray-600" />
        <a href="/student/enrolled" className="flex items-center">
          Teacher Classes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <IoSettings className=" text-gray-600" />
        <a href="#" className="flex items-center">
          Settings
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <RiAccountCircleFill className=" text-gray-600" />
        <a href="#" className="flex items-center">
          Profile
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className=" md:hidden w-full my-0 ">
      <div className="container  mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Shule-Mtandaoni
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <a href="/login" className=" w-full">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log Out</span>
            </Button>
            </a>
            <a href="" className=" w-full">
                <Button  fullWidth variant="gradient" size="sm" className="">
              <span> Contact Us </span>
            </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}