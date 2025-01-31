import React, { ReactNode } from "react";

function Button({
    children,
    className,
}: {
    children: ReactNode;
    className: string;
}) {
    return <button className={`rounded-xl ${className}`}>{children}</button>;
}

export default Button;
