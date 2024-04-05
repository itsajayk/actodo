import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

    function Login(props) {
    // Initialize the navigate hook from react-router-dom
    const navigate = useNavigate();

    // Set up state variables for entered username and password
    const [eusername, setEusername] = useState("");
    const [epassword, setPassword] = useState("");

    // State variable and setter for user registration status check
    const [ruser, setRuser] = useState(true);

    // Grab the users array from the props
    const users = props.users;

    // Function to handle input change events for the username field
    function handleUInput(evt) {
        setEusername(evt.target.value);
    }

    // Function to handle input change events for the password field
    function handlePInput(evt) {
        setPassword(evt.target.value);
    }

    // Function to check entered credentials against the users array
    function checkUser() {
        let userfound = false;

        // Iterate through the users array looking for a matching username and password
        users.forEach(function (item) {
        if (item.username === eusername && item.password === epassword) {
            // If a match is found, log success, update the userfound flag, and navigate to the landing page
            console.log("Login successful");
            userfound = true;
            navigate("/landing", { state: { user: eusername } });
        }
        });

        // If no user was found, log the failure and update the ruser state variable
        if (userfound === false) {
        console.log("Login Failed");
        setRuser(false);
        }
    }

    // JSX returned by the component
    return (
        <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser ? (
            <p>I help you manage your activities after you login :)</p>
            ) : (
            <p className="text-red-500">Please Sign Up before Login</p>
            )}

            <div className="flex flex-col gap-2 my-2">
            {/* Input element for username */}
            <input
                type="text"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="username"
                onChange={handleUInput}
            />

            {/* Input element for password */}
            <input
                type="text"
                className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="password"
                onChange={handlePInput}
            />

            {/* Button element to submit the entered credentials */}
            <button
                className="bg-[#8272DA] w-24 p-1 rounded-md"
                onClick={checkUser}
            >
                Login
            </button>

            {/* Link element to navigate to the signup page */}
            <p>
                Don't have an account?{" "}
                <Link to={"/signup"} className="underline">
                Sign Up
                </Link>{" "}
            </p>
            </div>
        </div>
        </div>
    );
}

export default Login;
