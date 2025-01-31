import Image from "next/image";
import React from "react";
import LogoWhite from "../../../public/logo-white.svg";
import LogoBlue from "../../../public/logo-blue.svg";

function Logo({ color, className }: { color: string, className: string }) {
    return (
        <div>
            {color === "white" ? (
                <Image src={LogoWhite} alt="Company Logo" className={className}/>
            ) : (
                <Image src={LogoBlue} alt="Company Logo" className={className}/>
            )}
        </div>
    );
}

export default Logo;
