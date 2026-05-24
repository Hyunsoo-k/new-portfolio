import Link from "next/link";
import styles from "./Button.module.scss";

type Props = {
  as: "button" | "a";
  isExternal?: boolean;
  text: string;
  variant: "default" | "active";
  href?: string;
  onClick?: () => void;
};

export const Button = ({ as, isExternal, text, variant, href, onClick }: Props) => {
  if (as === "a" && href) {
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${styles.a} ${variant === "active" ? styles.active : ""}`}
      >
        {text}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${variant === "active" ? styles.active : ""}`}
    >
      {text}
    </button>
  );
};