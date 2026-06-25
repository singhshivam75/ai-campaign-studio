import React from "react";

const Avatar = ({
  src,
  alt = "User Avatar",
  name = "",
  size = "md", // sm, md, lg
  showBadge = false,
  badgeColor = "bg-emerald-500",
  className = "",
}) => {
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.split(" ");
    return parts.map((part) => part[0]).join("").toUpperCase().slice(0, 2);
  };

  const sizes = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-xl",
  };

  const badgeSizes = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-4 h-4",
  };

  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizes[size] || sizes.md} rounded-xl object-cover ring-2 ring-slate-100/50 hover:ring-indigo-100 transition-all duration-200`}
        />
      ) : (
        <div
          className={`${sizes[size] || sizes.md} rounded-xl flex items-center justify-center font-bold bg-indigo-50 border border-indigo-100 text-indigo-600 uppercase`}
        >
          {getInitials(name || alt)}
        </div>
      )}
      {showBadge && (
        <span
          className={`absolute bottom-0 right-0 rounded-full ring-2 ring-white ${badgeColor} ${badgeSizes[size] || badgeSizes.md}`}
        />
      )}
    </div>
  );
};

export default Avatar;
