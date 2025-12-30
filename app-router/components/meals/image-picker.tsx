"use client";

import { ChangeEvent, useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const inputImageRef = useRef<HTMLInputElement>(null);

  function handlePicker() {
    if (inputImageRef.current) {
      inputImageRef.current?.click();
    }
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="The selected image" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputImageRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
