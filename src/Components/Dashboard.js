import React, { useState } from "react";
import { Route } from "react-router-dom";
import DisplayImages from "./DisplayImages";

export default function Dashboard() {
  const [navHeader, setNavHeader] = useState([{ id: 0, name: "New Jersey Images", selected: true }])
  return (
    <>
      {/* navbar links */}
      <ul class="navbar navbar-dark bg-dark sticky-top">
        <li>
          <label className="navbar-brand">{navHeader[0].name}</label>
        </li>
      </ul>
      <div className="container-fluid">
        {/* Routes */}
        <Route exact path="/" component={DisplayImages} />
      </div>
    </>
  );
}
