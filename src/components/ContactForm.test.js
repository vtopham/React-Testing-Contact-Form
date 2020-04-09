import React from "react"
import {render, fireEvent} from "@testing-library/react"
import ContactForm from "./ContactForm"
import { act } from "react-dom/test-utils"

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

//BAD TEST, NEED TO FIX. SHOULD FIX MAX LENGTH
test ("can take a reasonable first name", () => {
    //arrange
    
    const {getByPlaceholderText, queryByTestId, getByTestId, queryByText, findByTestId} = render(<ContactForm/>)

    const firstNameInput = getByTestId("first-name")

    //act - type in a name that is 10 characters & click submit
    fireEvent.change(firstNameInput, {target: {value: "AAAAAAAAAA"}})
    
    fireEvent.click(getByTestId('submit-button'), {button: 1}) //click left mouse button on submit to trigger the rror
    
    //assert
    expect(queryByTestId("first-name-error")).toBeNull();


})

