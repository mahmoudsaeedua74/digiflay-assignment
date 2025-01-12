import React from "react";

export default function Button({ children }: { children: string }) {

  return <button type="submit" className="bg-mainColor transition-colors duration-200 hover:bg-[#2a7b56] rounded-sm py-2 font-bold text-white">{children}</button>;
}
// This button component is designed to be generic and can be reused throughout the project
