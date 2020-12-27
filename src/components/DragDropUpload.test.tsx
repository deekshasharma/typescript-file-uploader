import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DragDropUpload } from "./DragDropUpload";
import upload from "../images/upload.svg";

/**
 * The purpose of these tests is not to verify implementation details or state of the component. It will only query
 * the DOM and verify HTML elements and their interaction.
 * The intended users of these React Components (developers passing props and end-users interacting with the component).
 */
const onFileSelect = () => console.log("hello");
const text = "Drag and Drop your file";
const altText = "upload-file";

test("Renders DragDropUpload component", () => {
  render(
    <DragDropUpload
      onFileSelect={onFileSelect}
      dragDropImage={upload}
      dragDropText={"Drag and Drop your file"}
    />
  );
  const pElement = screen.getByText(text);
  const image = screen.getByAltText(altText);
  expect(pElement).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("Test onChange of input element", () => {
  const handleChange = jest.fn();
  const { container } = render(<input type="file" onChange={handleChange} />);
  const input = container.firstChild as HTMLInputElement;
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("");
});
