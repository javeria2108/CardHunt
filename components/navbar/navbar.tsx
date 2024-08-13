"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Search from "./search";
import Menu from "./menu";
import SignInButton from "./sign-in-button";
import SignUpButton from "./sign-up-button";
import Modal from "../ui/modals/modal";
import AuthContent from "./auth-content";

const Navbar = () => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleButtonClick = () => {
    setAuthModalVisible(true);
  };
  return (
    <div className="border-b py-2 md:py-0 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <Search />
        </div>
        <div className="absolute right-1/2 translate-x-1/2 transform z-10">
          <Menu />
        </div>
        <div onClick={handleButtonClick} className="flex items-center space-x-6 cursor-pointer text-sm">
          <SignInButton />
          <SignUpButton />
        </div>
        <Modal visible={authModalVisible} setVisible={setAuthModalVisible}>
          <AuthContent/>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
