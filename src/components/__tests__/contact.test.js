import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("to check if the heading is present or not", () => {
    render(<ContactUs />)


    //Quering
    const headingTest = screen.getByRole("heading")


    //Assertion
    expect(headingTest).toBeInTheDocument();
})  


test("to check if the Name Input is present or not", () => {
    render(<ContactUs />)


    //Quering
    const inputs = screen.getByPlaceholderText("Name")


    //Assertion
    expect(inputs).toBeInTheDocument();
})  


test("to check if the Phone Input is present or not", () => {
    render(<ContactUs />)


    //Quering
    const inputs = screen.getByPlaceholderText("Phone")


    //Assertion
    expect(inputs).toBeInTheDocument();
})  


test("to check if the two inputs are present or not", () => {
    render(<ContactUs />)


    //Quering
    const inputs = screen.getAllByRole("textbox")

    //Assertion
    expect(inputs.length).toBe(2);
})  

test("to check if the button is present or not", () => {
    render(<ContactUs />)


    //Quering
    const buttonTest = screen.getByRole("button")

    //Assertion
    expect(buttonTest).toBeInTheDocument();
})  
