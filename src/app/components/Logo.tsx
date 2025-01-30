import Image from "next/image";
import React from "react";
import LogoWhite from "../../../public/logo-white.svg";
import LogoBlue from "../../../public/logo-blue.svg";

function Logo({ color }: { color: string }) {
    return (
        <div>
            {color === "white" ? (
                <Image src={LogoWhite} alt="Company Logo" />
            ) : (
                <Image src={LogoBlue} alt="Company Logo" />
            )}
        </div>
    );
}

export default Logo;
