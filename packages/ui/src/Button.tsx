import React from 'react'

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="sans-serif bg-blue-300">{props.children}</button>;
}

Button.displayName = "Button";
