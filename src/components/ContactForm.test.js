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

test ("placeholder text", () => {

    //arrange
    const {getByTestId} = render (<ContactForm/>)
    const firstNameInput = getByTestId("first-name")
    const lastNameInput = getByTestId("last-name")
    const emailInput = getByTestId("email")

    //act - none
    //assert
    expect(firstNameInput).toBeVisible();
    expect(firstNameInput).toHaveAttribute("placeholder", "bill")

    expect(lastNameInput).toBeVisible();
    expect(lastNameInput).toHaveAttribute("placeholder", "luo")

    expect(emailInput).toBeVisible();
    expect(emailInput).toHaveAttribute("placeholder", "bluebill1049@hotmail.com")


})

test ("fields can take input", () => {
    //arrange
    const {getByTestId} = render(<ContactForm/>)
    const firstNameInput = getByTestId("first-name")
    const lastNameInput = getByTestId("last-name")
    const emailInput = getByTestId("email")
    const messageInput = getByTestId("message")

    //act - type in something into each field
    fireEvent.change(firstNameInput, {target: {value: "FirstName"}})
    fireEvent.change(lastNameInput, {target: {value: "LastName"}})
    fireEvent.change(emailInput, {target: {value: "Email"}})
    fireEvent.change(messageInput, {target: {value: "Message"}})

    //assert
    expect(firstNameInput).toHaveValue("FirstName")
    expect(lastNameInput).toHaveValue("LastName")
    expect(emailInput).toHaveValue("Email")
    expect(messageInput).toHaveValue("Message")

})

//BAD TEST, NEED TO FIX. SHOULD FIX MAX LENGTH
// test ("can take a reasonable first name", () => {
//     //arrange
    
//     const {getByPlaceholderText, queryByTestId, getByTestId, queryByText, findByTestId} = render(<ContactForm/>)

//     const firstNameInput = getByTestId("first-name")

//     //act - type in a name that is 10 characters & click submit
//     fireEvent.change(firstNameInput, {target: {value: "AAAAAAAAAA"}})
    
//     fireEvent.click(getByTestId('submit-button'), {button: 1}) //click left mouse button on submit to trigger the rror
    
//     //assert
//     expect(queryByTestId("first-name-error")).toBeNull();


// })

