import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { Select, Option } from "@material-tailwind/react";
import LogoComponent from "../../components/LogoComponent";

const regions = [
  {
    name: "Arusha",
    districts: [
      "Arusha District",
      "Arumeru District",
      "Karatu District",
      "Longido District",
      "Monduli District",
      "Ngorongoro District",
    ],
  },
  {
    name: "Dar es Salaam",
    districts: ["Ilala District", "Kinondoni District", "Temeke District"],
  },
  {
    name: "Dodoma",
    districts: [
      "Bahi District",
      "Chamwino District",
      "Chemba District",
      "Dodoma Municipal",
      "Kondoa District",
      "Mpwapwa District",
    ],
  },
  {
    name: "Geita",
    districts: [
      "Bukombe District",
      "Chato District",
      "Geita District",
      "Mbogwe District",
      "Nyang'hwale District",
    ],
  },
  {
    name: "Iringa",
    districts: ["Iringa District", "Kilolo District", "Mufindi District"],
  },
  {
    name: "Kagera",
    districts: [
      "Bukoba District",
      "Bukoba Municipal",
      "Karagwe District",
      "Kyerwa District",
      "Misenyi District",
    ],
  },
  {
    name: "Katavi",
    districts: ["Mlele District", "Mpanda District", "Mpanda Town Council"],
  },
  {
    name: "Kigoma",
    districts: [
      "Buhigwe District",
      "Kasulu District",
      "Kasulu Town Council",
      "Kibondo District",
      "Kigoma District",
      "Kigoma-Ujiji Municipal",
    ],
  },
  {
    name: "Kilimanjaro",
    districts: [
      "Hai District",
      "Moshi District",
      "Moshi Municipal",
      "Mwanga District",
      "Rombo District",
      "Same District",
      "Siha District",
    ],
  },
  {
    name: "Lindi",
    districts: [
      "Kilwa District",
      "Lindi District",
      "Lindi Municipal",
      "Liwale District",
      "Nachingwea District",
      "Ruangwa District",
    ],
  },
  {
    name: "Manyara",
    districts: [
      "Babati District",
      "Babati Town Council",
      "Hanang District",
      "Kiteto District",
      "Mbulu District",
      "Simanjiro District",
    ],
  },
  {
    name: "Mara",
    districts: [
      "Bunda District",
      "Butiama District",
      "Musoma District",
      "Musoma Municipal",
      "Rorya District",
      "Serengeti District",
      "Tarime District",
    ],
  },
  {
    name: "Mbeya",
    districts: [
      "Chunya District",
      "Ileje District",
      "Kyela District",
      "Mbarali District",
      "Mbeya District",
      "Mbeya Urban District",
      "Rungwe District",
    ],
  },
  {
    name: "Morogoro",
    districts: [
      "Gairo District",
      "Kilombero District",
      "Kilosa District",
      "Morogoro District",
      "Morogoro Municipal",
      "Mvomero District",
      "Ulanga District",
    ],
  },
  {
    name: "Mtwara",
    districts: [
      "Masasi District",
      "Masasi Town Council",
      "Mtwara District",
      "Mtwara Municipal",
      "Nanyumbu District",
      "Newala District",
      "Tandahimba District",
    ],
  },
  {
    name: "Mwanza",
    districts: [
      "Ilemela Municipal",
      "Kwimba District",
      "Magu District",
      "Misungwi District",
      "Nyamagana Municipal",
      "Sengerema District",
      "Ukerewe District",
    ],
  },
  {
    name: "Njombe",
    districts: [
      "Ludewa District",
      "Makambako Town Council",
      "Makete District",
      "Njombe District",
      "Njombe Town Council",
      "Wanging'ombe District",
    ],
  },
  { name: "Pemba North", districts: ["Micheweni District", "Wete District"] },
  { name: "Pemba South", districts: ["Chake Chake District"] },
  {
    name: "Pwani",
    districts: [
      "Bagamoyo District",
      "Kibaha District",
      "Kibaha Town Council",
      "Kisarawe District",
      "Mafia District",
      "Mkuranga District",
      "Rufiji District",
    ],
  },
  {
    name: "Rukwa",
    districts: [
      "Kalambo District",
      "Nkasi District",
      "Sumbawanga District",
      "Sumbawanga Municipal",
    ],
  },
  {
    name: "Ruvuma",
    districts: [
      "Mbinga District",
      "Nyasa District",
      "Songea District",
      "Songea Municipal",
      "Tunduru District",
    ],
  },
  {
    name: "Shinyanga",
    districts: [
      "Kahama Town Council",
      "Kahama District",
      "Kishapu District",
      "Shinyanga District",
      "Shinyanga Municipal",
    ],
  },
  {
    name: "Simiyu",
    districts: [
      "Bariadi District",
      "Busega District",
      "Itilima District",
      "Maswa District",
      "Meatu District",
    ],
  },
  {
    name: "Singida",
    districts: [
      "Ikungi District",
      "Iramba District",
      "Manyoni District",
      "Singida District",
      "Singida Municipal",
    ],
  },
  {
    name: "Songwe",
    districts: [
      "Ileje District",
      "Mbozi District",
      "Momba District",
      "Songwe District",
    ],
  },
  {
    name: "Tabora",
    districts: [
      "Igunga District",
      "Kaliua District",
      "Nzega District",
      "Nzega Town Council",
      "Sikonge District",
      "Tabora Municipal",
      "Urambo District",
      "Uyui District",
    ],
  },
  {
    name: "Tanga",
    districts: [
      "Handeni District",
      "Handeni Town Council",
      "Kilindi District",
      "Korogwe District",
      "Korogwe Town Council",
      "Lushoto District",
      "Mkinga District",
      "Muheza District",
      "Pangani District",
      "Tanga City",
    ],
  },
  { name: "Unguja North", districts: ["Kaskazini A District"] },
  { name: "Unguja South", districts: ["Kusini District"] },
  {
    name: "Zanzibar Central/South",
    districts: ["Mjini District", "Kati District", "Kusini District"],
  },
  { name: "Zanzibar North", districts: ["Kaskazini District"] },
  {
    name: "Zanzibar Urban/West",
    districts: ["Magharibi District", "Mjini District"],
  },
];

export default function InstructorRegister() {
  const navigate = useNavigate();

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleRegionChange = (event) => {
    const regionName = event;
    setSelectedRegion(regionName);
    // Reset selected district when region changes
    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    const districtName = event;
    setSelectedDistrict(districtName);
  };

  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogErrorCode, setDialogErrorCode] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetPassword = ({ target }) => setPassword(target.value);
  const handleSetEmail = ({ target }) => setEmail(target.value);
  const handleSetPassword2 = ({ target }) => setPassword2(target.value);
  const handleSetUsername = ({ target }) => setUsername(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password == "" || password2 == "" || username == "" || email == "") {
      setDialogErrorCode("Incomplete Form");
      setDialogMessage("please fill all inputs value");
      setOpenDialog(true);
    }

    if (password != password2) {
      setDialogErrorCode("Invalid Form");
      setDialogMessage("Passwords do not match");
      setOpenDialog(true);
    } else {
      setLoading(true);

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // signed in
          const user = userCredential.user;
          setLoading(false);
          console.log(user);
          navigate("/login");
        })
        .catch((error) => {
          setLoading(false);
          setOpenDialog(true);
          const errorCode = error.code;
          const errorMessage = error.message;
          setDialogMessage(errorMessage);
          setDialogErrorCode(errorCode);
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className=" flex flex-col-reverse md:flex-row-reverse min-h-screen ">
      <div className=" simple_pattern min-h-screen w-full flex justify-center items-center px-1 md:px-0 ">
        <div className=" p-8 rounded-lg shadow-md md:min-w-[500px] bg-gray-300 my-8 ">
            <div className=" mb-2">
                <LogoComponent />
            </div>
          <Typography variant="h2"> Sign up </Typography>
          <Typography>
            {" "}
            Learn Online, Anywhere with
            <span className=" text-soft-blue font-bold ">
              {" "}
              Shule-Mtandaoni
            </span>{" "}
          </Typography>

          {/* Dialog */}
          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader>Error code: {dialogErrorCode} </DialogHeader>
            <DialogBody>{dialogMessage}</DialogBody>
            <DialogFooter>
              <Button
                variant="gradient"
                color="blue"
                onClick={handleOpenDialog}
              >
                <span> Try Again </span>
              </Button>
            </DialogFooter>
          </Dialog>

          <form onSubmit={handleSubmit} className=" flex flex-col gap-5 mt-8  ">
            <div>
              <Input
                value={username}
                onChange={handleSetUsername}
                variant="standard"
                label="Full Name"
              />
            </div>
            <div>
              <Input
                variant="standard"
                label="Phone Number"
                value={email}
                onChange={handleSetEmail}
                type="tel"
              />
            </div>

            <div>
              <Input
                variant="standard"
                label="School Name"
                value={email}
                onChange={handleSetEmail}
                type="text"
              />
            </div>

            <div className=" w-full mt-3">
              <Select
                variant="static"
                value={selectedRegion}
                label="Select Region"
                onChange={handleRegionChange}
              >
                {regions.map((region) => (
                  <Option key={region.name} value={region.name}>
                    {" "}
                    {region.name}{" "}
                  </Option>
                ))}
              </Select>
            </div>

            {selectedRegion && (
              <div className=" w-full mt-3">
                <Select
                  variant="static"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  label="District"
                >
                  {regions
                    .find((region) => region.name === selectedRegion)
                    .districts.map((district) => (
                      <Option key={district} value={district}>
                        {" "}
                        {district}{" "}
                      </Option>
                    ))}
                </Select>
              </div>
            )}

            <div>
              <Input
                variant="standard"
                label="Password"
                value={password}
                onChange={handleSetPassword}
                type="password"
              />
            </div>

            <div>
              <Input
                variant="standard"
                label="confirm Password"
                type="password"
                value={password2}
                onChange={handleSetPassword2}
              />
            </div>

            <a href="/login" className=" mt-2">
              <Button
                className=" flex items-center justify-center bg-tangerine"
                //color={email ? "blue" : "gray"}
                //type="submit"
                variant="filled"
                size="lg"
                fullWidth
                loading={loading}
              >
                Signup{" "}
              </Button>
            </a>

            <p className=" text-center"> OR</p>

            <a href="/register" className=" text-center">
              <Button variant="text">Signup as a student </Button>
            </a>

            <Link to={"/login"} className=" mt-4">
              <Button
                className=" flex items-center justify-center"
                type="submit"
                variant="outlined"
                size="lg"
                fullWidth
              >
                GO TO SIGNIN{" "}
              </Button>
            </Link>
          </form>
        </div>
      </div>

      <div className=" w-full relative ">
        <img
          src="https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg"
          alt="amazing-image"
          className="h-full w-full object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

        <div className="absolute bottom-10 left-10">
          <p className=" text-white  bg-opacity-70 p-8 md:w-3/4 md:rounded-lg ">
            Teaching online isn't just about delivering lessons; it's about
            igniting curiosity, fostering collaboration, and empowering learners
            to thrive in a digital world
          </p>
        </div>
      </div>
    </div>
  );
}
