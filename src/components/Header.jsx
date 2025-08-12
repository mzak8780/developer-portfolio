import React from "react";

const Header = () => {
    return (
        <header className="absolute flex items-center justify-left top-4 left-7 z-10 w-full">
            <div className="container w-full flex h-12 items-center">
                <img
                    src="public\assets\green_planet.png"
                    alt="Space Dude on Rocket"
                    className="h-12 w-12 mr-2"
                ></img>
                <div className="font-space-grotesk font-bold">
                    <a href="/">
                        <span className="text-2xl">Maks Zak</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
