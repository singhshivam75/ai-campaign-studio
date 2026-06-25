import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Header = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`px-6 py-5 border-b border-slate-100 flex items-center justify-between gap-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Content = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Footer = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-end gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Bind subcomponents
Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;

export default Card;
export { Header as CardHeader, Content as CardContent, Footer as CardFooter };
