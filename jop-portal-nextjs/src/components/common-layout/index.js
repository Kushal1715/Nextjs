import React from "react";
import Header from "../header";

const CommonLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/* header  */}
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;
