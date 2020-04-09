import React from "react"
import {render} from "@testing-library/react"
import ContactForm from "./ContactForm"

test ("test the contact form", () => {
    //arrange
    const {getByText} = render(<ContactForm/>)

    //act

    //assert
    const firstNameText = getByText(/First Name/i);
    expect(firstNameText).toBeVisible();


})