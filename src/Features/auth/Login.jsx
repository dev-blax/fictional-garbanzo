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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import LogoComponent from "../../components/LogoComponent";


export default function Login() {
  const navigate = useNavigate();

  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogErrorCode, setDialogErrorCode] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const validateEmail = (testEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(testEmail);
  };

  const handleSetPassword = ({ target }) => {
    setPassword(target.value);
    updateValidForm();
  }

  const handleSetEmail = ({ target }) => {
    setEmail(target.value);
    setValidEmail(validateEmail(email));
    updateValidForm();
  };

  function updateValidForm(){
    console.log('updating valid form');
    console.log('email: ',email);
    console.log("password: ", password);
    if(email != "" || password != '' ){
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signed in
        setLoading(false);
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
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
  };

  return (
    <div className=" flex flex-col-reverse md:flex-row min-h-screen  ">
      <div className=" simple_pattern w-full min-h-screen flex justify-center items-center px-1 md:px-0 ">
        <div className=" p-10 rounded-lg shadow-md md:min-w-[500px] bg-gray-300 ">
          <div className=" mb-2">
            <LogoComponent />
          </div>
          <Typography variant="h2"> Sign in </Typography>
          <Typography>
            {" "}
            Learn Online, Anywhere with {" "}
            <span className=" text-soft-blue font-bold ">Shule-Mtandaoni</span>{" "}
          </Typography>

          {/* Dialog */}
          <Dialog open={openDialog} handler={handleOpenDialog}>
            <DialogHeader> {dialogErrorCode} </DialogHeader>
            <DialogBody>{dialogMessage}</DialogBody>
            <DialogFooter>
              <Button
                variant="gradient"
                color="blue"
                onClick={handleOpenDialog}
              >
                <span> Try again </span>
              </Button>
            </DialogFooter>
          </Dialog>

          <form onSubmit={handleLogin} className=" flex flex-col gap-5 my-10 ">
            <div>
              <Input
                onChange={handleSetEmail}
                variant="standard"
                label="Email"
                type="email"
                value={email}
              />
            </div>
            <div>
              <Input
                value={password}
                onChange={handleSetPassword}
                variant="standard"
                label="Password"
                type="password"
              />
            </div>

            <a href="/student" className=" mt-5">
              <Button
                className=" flex items-center justify-center bg-tangerine "
                //type="submit"
                variant="filled"
                size="lg"
                // color='blue'
                loading={loading}
                fullWidth
                // disabled={validForm}
              >
                SIGN in{" "}
              </Button>
            </a>

            <Link to={"/register"} className=" mt-4">
              <Button
                className=" flex items-center justify-center border-darknavy "
                type="submit"
                variant="outlined"
                size="lg"
                fullWidth
              >
                GO TO SIGN UP{" "}
              </Button>
            </Link>
          </form>
        </div>
      </div>

      <div className=" w-full relative ">
        <img
          src="/images/teacher.jpg"
          alt="amazing-image"
          className="h-full w-full object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>

        <div className="absolute bottom-10 left-10">
          <p className=" text-white bg-opacity-70 p-8 md:w-3/4 md:rounded-lg ">
            " Technology is enabling a new paradigm in education. It's time to <span className=" text-soft-blue font-bold ">seize the opportunity</span> and make learning accessible, engaging, and personalized for every learner, regardless of location or socioeconomic status.{" "}
             <br /> -- Salman Khan, founder of Khan Academy
          </p>
        </div>
      </div>
    </div>
  );
}
