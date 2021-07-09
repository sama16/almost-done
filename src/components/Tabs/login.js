import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { withRouter } from "react-router-dom";
import "./signup.css";
import {
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from "@material-ui/core";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(email, pass).then((user) => {
      auth.currentUser.updateProfile({
        displayName: name,
      });
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/Home");
      }
    });
  }, []);

  return (
    <div>
      min-height:800px;
      <div class="login-wrap" style={{ minHeight: "600px" }}>
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Login
          </label>

          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  value={email}
                  onChange={(text) => setEmail(text.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  value={pass}
                  onChange={(text) => setPass(text.target.value)}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
              </div>
              <div class="group">
                <input type="submit" class="button" value="Login" />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSignup}
              >
                LOGIN{" "}
              </Button>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Login);
