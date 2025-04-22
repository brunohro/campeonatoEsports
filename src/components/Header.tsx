import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <div className="h-auto bg-zinc-900">
      <h1 className="text-white font-extrabold text-center p-5 text-3xl">
        {children}
      </h1>
    </div>
  );
}

export default Header;
