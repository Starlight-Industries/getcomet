"use client"
import React from 'react';
import Link from 'next/link';
import { IconPackage } from "@tabler/icons-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="border-b border-blue-950/30 backdrop-blur-md bg-black/80 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <IconPackage className="text-blue-400" size={24} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Comet</span>
          </div>
          <div className="flex space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors text-gray-400">Features</a>
            <a href="#docs" className="hover:text-blue-400 transition-colors text-gray-400">Documentation</a>
            <a href="#community" className="hover:text-blue-400 transition-colors text-gray-400">Community</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;