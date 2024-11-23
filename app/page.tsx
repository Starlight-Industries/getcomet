"use client"

import React, { useState, useEffect } from 'react';
import { Download, Package, Terminal, Github, Star, Clock, Shield, ChevronRight, Command } from 'lucide-react';
import { Vortex } from '../components/ui/vortex';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatCardProps {
  number: string;
  label: string;
}
const CometLanding = () => {
  const packages = [
    "vesktop",
    "npm",
    "bun",
    "deno",
    "grip 👋",
    "docker",
    "docker-compose",
    "tailscale",
    "firefox",
    "zen-browser",
    "vlc",
    "gimp",
    "libreoffice",
    "visual-studio-code",
    "intellij-idea",
    "obs-studio",
    "krita",
    "blender",
    "inkscape",
    "spotify",
    "discord",
    "telegram",
    "thunderbird",
    "audacity",
    "kdenlive",
    "virtualbox",
    "qemu",
    "flatpak",
    "snapd",
    "wine",
    "lutris",
    "steam",
    "git",
    "gnome-terminal",
    "alacritty",
    "htop",
    "neovim",
    "emacs",
    "anki",
    "keepassxc",
    "bitwarden",
    "nextcloud",
    "flameshot",
    "signal-desktop",
    "teams",
    "zoom",
    "gparted",
    "btop",
    "audacious",
    "clementine",
    "zsh",
    "oh-my-zsh",
    "fish",
    "fonts-noto",
    "fonts-jetbrains-mono",
    "rclone",
    "mpv",
    "plex-media-server",
    "jellyfin",
    "qbittorrent",
    "transmission",
    "grub-customizer",
    "etcher",
    "clamav",
    "godot",

];
  const [currentPackage, setCurrentPackage] = useState(packages[0]);
  const [isVisible, setisVisible] = useState(true);
  useEffect(() => {
    const packageInterval = setInterval(() => {
      setisVisible(false);
      setTimeout(() => {
        setCurrentPackage(prevPackage => {
          const currentIndex = packages.indexOf(prevPackage);
          return packages[(currentIndex + 1) % packages.length]
        });
        setisVisible(true)
      }, 150 /* transition time */);
    }, 1500 /* change interval */);

    return () => clearInterval(packageInterval);
  }, []);
  return (
    <div className="min-h-screen bg-black text-gray-100">


      {/* Hero Section */}
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-[30rem] mb-60 pt-48"
      >
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6 space-x-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                v1.0.0 Now Available
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text pb-5">
              The Future of Package Management
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Lightning fast. Incredibly secure. Built with Rust.
              The modern package manager for modern developers.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg flex items-center space-x-2 transition-all">
                <Download size={20} />
                <span>Install Comet</span>
                <ChevronRight size={16} />
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 border border-gray-800 px-8 py-4 rounded-lg flex items-center space-x-2 transition-all">
                <Github size={20} />
                <span>View Source</span>
              </button>
            </div>
          </div>
        </div>

        {/* Terminal Preview */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-1">
            <div className="bg-black rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4 text-gray-500">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">$</span>
                  <span className="text-gray-300">comet install {' '}
                    <span
                      className={`
                        inline-block
                        transition-all
                        duration-600
                        ${isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 -translate-y-2'
                        }
                        `}
                    >
                      {currentPackage}
                    </span>
                  </span>
                </div>
                <div className="text-gray-500">📦 Resolving dependencies...</div>
                <div className="text-gray-400">✨ Dependencies installed in 0.8s</div>
              </div>
            </div>
          </div>
        </div>
      </Vortex>


      {/* Features Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Why Choose Comet?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="text-blue-400" />}
              title="Blazing Fast"
              description="Up to 10x faster than traditional package managers"
            />
            <FeatureCard
              icon={<Shield className="text-blue-400" />}
              title="Ultra Secure"
              description="Built-in vulnerability scanning and checksum verification"
            />
            <FeatureCard
              icon={<Command className="text-blue-400" />}
              title="Developer First"
              description="Intuitive CLI with smart defaults and powerful customization"
            />
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Get Started in Seconds
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <code className="text-blue-400">
              curl -sSL https://get.comet.dev | sh
            </code>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 border-t border-blue-950/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="1M+" label="Downloads" />
            <StatCard number="10k+" label="Active Users" />
            <StatCard number="99.9%" label="Uptime" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-950/30 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2024 Comet Package Manager MIT License.</p>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-900/50 p-8 rounded-lg hover:bg-gray-900 transition-colors border border-gray-800/50 hover:border-gray-800">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Stat Card Component
const StatCard = ({ number, label }: StatCardProps) => (
  <div>
    <div className="text-4xl font-bold text-blue-400 mb-2">{number}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

export default CometLanding;