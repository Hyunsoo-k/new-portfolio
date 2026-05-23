"use client";

import { SubmitEvent } from "react";

import styles from "./DropALine.module.scss";

export const DropALine = () => {

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    // formspree 가입 후 수정 필요
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.dropALine}>
      <input
        name="name"
        placeholder="문의자명"
        spellCheck="false"
        autoComplete="off"
        className={styles.input}
      />
      <input
        name="email"
        placeholder="이메일"
        spellCheck="false"
        autoComplete="off"
        className={styles.input}
      />
      <textarea
        name="message"
        placeholder="문의 내용을 입력해 주세요."
        spellCheck="false"
        autoComplete="off"
        className={styles.textarea}
      />
      <button className={styles.submitBtn}>전송</button>
    </form>
  );
};