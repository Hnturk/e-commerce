import React from "react";

function SidebarDiv({
  children,
  height = "100px",
  minWidth = "100px",
  width = "100px",
  shadow = "0px 2px 10px rgba(0, 0, 0, 0.5)",
  display = "flex",
  alignItems = "flex-start",
  flexDirection =  "column",
  gap = 10,
}) {
  return (
    <div
      style={{
        height: height,
        width: width,
        boxShadow: shadow,
        display: display,
        alignItems: alignItems,
        flexDirection: flexDirection,
        gap: gap,
        "min-width": minWidth,
      }}
    >
      {children}
    </div>
  );
}

export default SidebarDiv;
