import { cleanup, fireEvent, render, waitFor, screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";
import { afterAll, toMatchSnapshot, expect, afterEach, describe, test, vi, toEqual } from "vitest";
import UserSelector from "../UserSelector";

const fn = vi.fn()
let testOptions = new Set()
testOptions.add("dale")
testOptions.add("kim")
afterEach(()=>{
    cleanup()
    fn.mockClear()

})
describe("UserSelector",()=>{
    test("to match snapshot",()=>{
        const component = render(<UserSelector querySetter={fn} optionArray={testOptions}/>)
        expect(component).toMatchSnapshot()
    })

    test("runs function on change",()=>{
        render(<UserSelector querySetter={fn} optionArray={testOptions}  />)
        console.log("AAAAAAAsaaaaaaaaaaAAAAS",fn.mock.calls)
        expect(fn.mock.calls.length).toEqual(2)
    })

    test("calls function on option change",async ()=>{
        const user = userEvent.setup()
        render(<UserSelector querySetter={fn} optionArray={testOptions}  />)
        const optionSelector = await screen.findAllByText("kim")
        await waitFor(()=>{expect(optionSelector[0].parentElement).toBeDefined})
        console.log()
        await user.selectOptions(optionSelector[0].parentElement, "kim")
        expect(fn.mock.calls.length).toEqual(3)
        
    })
})