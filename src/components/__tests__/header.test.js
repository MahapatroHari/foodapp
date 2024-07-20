import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter, Link } from "react-router-dom";

test("to check if the Log IN/OUT Button is present or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )


    //Quering
    const headingTest = screen.getByText("LogIn")


    //Assertion
    expect(headingTest).toBeInTheDocument();
})

test("to check if the Log in/out button is functional or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )


    //Quering
    const LIBtn = screen.getByText("LogIn")

    fireEvent.click(LIBtn);

    const LOBtn = screen.getByText("LogOut")


    //Assertion
    expect(LOBtn).toBeInTheDocument();

    fireEvent.click(LOBtn);

    expect(LIBtn).toBeInTheDocument();
})


test("to check if the CartInfo is present or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )


    //Quering
    const CartLogo = screen.getByTestId("CartInfo")


    //Assertion
    expect(CartLogo).toBeInTheDocument();
})

test("to check if the Logo is present or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )


    //Quering
    const logo = screen.getByRole("img")


    //Assertion
    expect(logo).toBeInTheDocument();
})

test("to check if the Nav Items is present or not", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>

    )


    //Quering
    const NavItems = screen.getAllByRole("listitem")


    //Assertion
    expect(NavItems.length).toBe(4);
})