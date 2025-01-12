"use client";
import React, { useRef, useState } from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaRedo,
  FaSave,
  FaUndo,
} from "react-icons/fa";
import { GoItalic } from "react-icons/go";
export default function Editor() {
  // Reference to the editor div where content is typed
  const editorRef = useRef<HTMLDivElement>(null);
  // State to store the history of the content and track the current step for undo/redo
  const [history, setHistory] = useState<string[]>([""]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  // Function that handles input inside the editor updates the history with new content
  function handleInput () {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML; // Get the current content of the editor
      const updatedHistory = history.slice(0, currentStep + 1); // Get all the previous history up to the current step
      //slice is arr method that take a new copy of tha last 
      setHistory([...updatedHistory, newContent]); // Update the history state
      setCurrentStep(updatedHistory.length); // Set the current step to the new step
    }
  };

  // function to apply styling ( bold italic underline and colors for fonts) to the editor content
  function applyStyle(
    command: string,
    value: string | undefined = undefined
  ) {
    if (editorRef.current) {
      editorRef.current.focus(); // Focus the editor before applying the style
      document.execCommand(command, false, value); 
      handleInput(); // Update the history after applying the style
    }
  };
//i use execCommand its an old way in js to apply styling >document.execCommand(command, showUI, value);
// how it work ? 
// i need to focus in ref first to make it active and give it a command is the order that what i want to change like "bold"
//  second is showUI muse be true or false  third is value i want 


  // Undo the last change by going one step back in history
  function undo () {
    if (currentStep > 0) {
      // Ensure we are not at the first step
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep); // Update the current step
      if (editorRef.current) {
        editorRef.current.innerHTML = history[prevStep]; // Set the content to the previous step
      }
    }
  };
  // Redo the undone change by going one step forward in history
  function redo () {
    if (currentStep < history.length - 1) {
      // Ensure we are not at the last step
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep); // Update the current step
      if (editorRef.current) {
        editorRef.current.innerHTML = history[nextStep]; // Set the content to the next step
      }
    }
  };
  return (
    <div className="container rounder-lg border mb-10 p-0 font-medium w-full overflow-hidden">
      <div
        className="
      grid
      xl:grid-cols-[1.2fr_1.1fr_1.1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]
      lg:grid-cols-[1.2fr_1.1fr_1.1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]
      md:grid-cols-5
      sm:grid-cols-4
      grid-cols-2
       border-b bg-[#F8F7FC]"
      >
        <select className="btn   bg-[#F8F7FC]  outline-none">
          <option defaultValue="Sans serif">Sans serif</option>
        </select>
        <select
          className="btn  bg-[#F8F7FC]  outline-none"
          onChange={(e) => applyStyle("foreColor", e.target.value)}
        >
          <option defaultValue="color">Color</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <select className="btn  bg-[#F8F7FC]  outline-none">
          <option defaultValue="Aa">Aa</option>
        </select>
        <button
          className="btn col-span-1"
          onClick={() => applyStyle("bold")}
          title="Bold (Ctrl+B)"
        >
          <strong>B</strong>
        </button>
        <button
          className="btn"
          onClick={() => applyStyle("italic")}
          title="Italic (Ctrl+I)"
        >
          <GoItalic />
        </button>
        <button
          className="btn"
          onClick={() => applyStyle("underline")}
          title="Underline (Ctrl+U)"
        >
          <u>U</u>
        </button>
        <button className="btn" onClick={undo} disabled={currentStep === 0}>
          <FaUndo />
        </button>
        <button
          className="btn"
          onClick={redo}
          disabled={currentStep === history.length - 1}
        >
          <FaRedo />
        </button>
        <button className="btn" onClick={() => applyStyle("justifyLeft")}>
          <FaAlignLeft />
        </button>
        <button className="btn " onClick={() => applyStyle("justifyCenter")}>
          <FaAlignCenter />
        </button>
        <button className="btn" onClick={() => applyStyle("justifyRight")}>
          <FaAlignRight />
        </button>
        <button className="btn" >
          <FaSave />
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable={true}
        onInput={handleInput}
        className="min-h-[300px] border-t-0 shadow-md p-10 bg-[#FCFCFE] outline-none"
      >
        Start typing here...
      </div>
    </div>
  );
}
