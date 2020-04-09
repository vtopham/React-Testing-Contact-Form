import React from "react"
import {render} from "@testing-library/react"
import ContactForm from "./ContactForm"

test ("let's make sure i can actually write a text", () => {
    //arrange
    const {getByText} = render(<ContactForm/>)

    //act

    //assert
    const firstNameText = getByText(/First Name/i);
    expect(firstNameText).toBeVisible();

})

test ("first name placeholder text", () => {

    //arrange
    const {getByPlaceholderText} = render (<ContactForm/>)
    //act - none
    //assert
    const firstNamePlaceholder = getByPlaceholderText("bill" )
    expect(firstNamePlaceholder).toBeVisible();
    expect(firstNamePlaceholder).toHaveAttribute("name", "firstName")
})

test ("last name placeholder text", () => {

    //arrange
    const {getByPlaceholderText} = render (<ContactForm/>)
    //act - none
    //assert
    const lastNamePlaceholder = getByPlaceholderText("luo" )
    expect(lastNamePlaceholder).toBeVisible();
    expect(lastNamePlaceholder).toHaveAttribute("name", "lastName")
    
})

test ("email placeholder text", () => {

    //arrange
    const {getByPlaceholderText} = render (<ContactForm/>)
    //act - none
    //assert
    const emailPlaceholder = getByPlaceholderText("bluebill1049@hotmail.com" )
    expect(emailPlaceholder).toBeVisible();
    expect(emailPlaceholder).toHaveAttribute("name", "email")
    
})