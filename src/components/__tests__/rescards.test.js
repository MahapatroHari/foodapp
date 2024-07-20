import { render, screen } from "@testing-library/react";
import ResCards from "../ResCards";
import "@testing-library/jest-dom";
import { mockCardData } from "../mocks/resDataMock";

test("to check if the res title is present or not", () => {
    render(<ResCards resData={mockCardData} />)


    //Quering
    const title = screen.getByText("Sri Sairam Parlour - Diamond Park")


    //Assertion
    expect(title).toBeInTheDocument();
})  


test("to check if the res img is present or not", () => {
    render(<ResCards resData={mockCardData} />)


    //Quering
    const imgTest = screen.getByRole("img")


    //Assertion
    expect(imgTest).toBeInTheDocument();
})  

test("to check if the res title is present or not", () => {
    render(<ResCards resData={mockCardData} />)


    //Quering
    const dataTest = screen.getAllByRole("paragraph")

    //Assertion
    expect(dataTest.length).toBe(4);
})  


