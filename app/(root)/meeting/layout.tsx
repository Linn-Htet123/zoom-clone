import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <span>navbar</span>
      {children}
      <span>footer</span>
    </main>
  );
};

export default RootLayout;
