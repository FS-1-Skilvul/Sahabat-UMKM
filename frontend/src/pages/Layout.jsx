import React from "react";
import SideBarAdmin from "../components/SideBarAdmin";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex max-h-screen" >
        <div className=" flex flex-col">
          <SideBarAdmin />
        </div>
        <div className="flex flex-col flex-1 w-full overflow-y-auto p-4">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;