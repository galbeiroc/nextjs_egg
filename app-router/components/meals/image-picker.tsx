"use client";

import { useRef } from "react";
import styles from "./image-picker.module.css";

interface ImagePickerProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const inputImageRef = useRef<HTMLInputElement>(null);

  function handlePicker() {
    if (inputImageRef.current) {
      inputImageRef.current?.click();
    }
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputImageRef}
        />
        <button className={styles.button} type="button" onClick={handlePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
