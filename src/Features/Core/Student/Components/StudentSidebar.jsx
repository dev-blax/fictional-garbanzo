import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    CalculatorIcon
  } from "@heroicons/react/24/solid";
   
  export function StudentSidebar() {
    return (
      <Card className=" hidden md:block sticky top-0 h-full min-h-screen w-full max-w-[20rem] rounded-none bg-tangerine/80 text-white p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="white">
            Shule Mtandaoni
          </Typography>
        </div>
        <List>
          <a href="/student/">
          <ListItem className=" text-white">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          </a>
          <a href="/student/enrolled">
          <ListItem className=" text-white">
            <ListItemPrefix>
              <CalculatorIcon className="h-5 w-5" />
            </ListItemPrefix>
            Enrolled Classes
          </ListItem>
          </a>
          {/* <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix>
          </ListItem> */}
          <a href="/teacher/newCourse">
          <ListItem className=" text-white">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Teacher Classes
          </ListItem>
          </a>
          
          <ListItem className=" text-white">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className=" text-white">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }