export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="sans-serif">{props.children}</button>;
}

Button.displayName = "Button";
