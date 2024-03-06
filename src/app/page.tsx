"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Form from "./Component/Form";
import React from "react";
interface Field {
  id: number;
  name: string;
  fieldType: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  required: boolean;
  listOfValues?: string[];
}
export default function Home() {
  const [fields, setFields] = useState<Field[]>([]);
  useEffect(() => {
    // Fetch JSON data here or use the provided JSON data
    const jsonData = {
      data: [
        {
          id: 1,
          name: "Full Name",
          fieldType: "TEXT",
          minLength: 1,
          maxLength: 100,
          defaultValue: "John Doe",
          required: true,
        },
        {
          id: 2,
          name: "Email",
          fieldType: "TEXT",
          minLength: 1,
          maxLength: 50,
          defaultValue: "hello@mail.com",
          required: true,
        },
        {
          id: 6,
          name: "Gender",
          fieldType: "LIST",
          defaultValue: "1",
          required: true,
          listOfValues: ["Male", "Female", "Others"],
        },
        {
          id: 7,
          name: "Love React?",
          fieldType: "RADIO",
          defaultValue: "1",
          required: true,
          listOfValues: ["Yes", "No"],
        },
      ],
    };
    setFields(jsonData.data);
  }, []);
  return (
    <div className="w-full">
      <div className="text-center mt-20 text-[28px]">Form</div>
      <div className="w-[40vw] mx-auto  p-6 rounded border border-slate-400 shadow-lg">
        <Form fields={fields} />
      </div>
    </div>
  );
}
