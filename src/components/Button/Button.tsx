import styles from "./Button.module.scss";

type Props = {
  text: string;
  variant: "default" | "active";
  onClick: () => void;
};

export const Button = ({ text, variant, onClick }: Props) => {
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