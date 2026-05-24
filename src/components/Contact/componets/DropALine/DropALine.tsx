"use client";

import { useState } from "react";
import { SubmitEvent } from "react";
import styles from "./DropALine.module.scss";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export const DropALine = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (name: string, email: string, message: string): FormErrors => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "문의자명을 입력해주세요.";
    }
    
    if (!email.trim()) {
      newErrors.email = "회산받으실 이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!message.trim()) newErrors.message = "문의 내용을 입력해주세요.";

    return newErrors;
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors = validate(name, email, message);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    fetch("https://formspree.io/f/xojbnjwb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    }).then(() => alert("전송되었습니다."));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.dropALine}>
      <div className={styles.inputWrapper}>
        <input
          name="name"
          placeholder="문의자명"
          spellCheck="false"
          autoComplete="off"
          className={styles.input}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.inputWrapper}>
        <input
          name="email"
          placeholder="이메일"
          spellCheck="false"
          autoComplete="off"
          className={styles.input}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.textareaWrapper}>
        <textarea
          name="message"
          placeholder="문의 내용을 입력해 주세요."
          spellCheck="false"
          autoComplete="off"
          className={styles.textarea}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>
      <button className={styles.submitBtn}>전송</button>
    </form>
  );
};