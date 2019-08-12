import React from "react";
import Input from "./Input.js";
import Button from "./Button.js";
export default ({ setValue, onClick, username }) => (
  <section>
    <Input name="username" setValue={setValue} value={username} />
    <Button onClick={() => onClick()} value="Search" />
  </section>
);
