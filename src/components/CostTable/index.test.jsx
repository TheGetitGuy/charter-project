import { afterEach, describe, expect, test } from "vitest";
import CostTable from "../CostTable";
import { cleanup, fireEvent, getByText, render, screen, waitFor } from "@testing-library/react"
afterEach(()=>{
    cleanup()
})
describe("CostTable",()=>{
    test("should match snapshot",()=>{
        expect(render(<CostTable/>)).toMatchSnapshot()
    })
    test("should show loading",()=>{
        render(<CostTable/>)
        expect(screen.getAllByText("..Loading..")[0])
    })
    test("should render data", async ()=>{
        render(<CostTable></CostTable>)
        const item = await screen.findAllByText("Ondricka and Sons")[0]
        waitFor(()=>{expect(item).toBeDefined()})
    })

    test("clicking buttons should change text",async ()=>{
        const table = render(<CostTable size={20} startIndex={40} />)
        const item = await screen.findAllByText("Ondricka and Sons")[0]
        waitFor(()=>{expect(item).toBeDefined})
            const button = await screen.findByText("->")
            fireEvent.click(button)
        const itemSecondCheck = await screen.findAllByText("Ondricka")[0]
        expect(itemSecondCheck).toBeNull
    })
    test("clicking left button is prevented at zero index", async ()=>{
        const table = render(<CostTable size={20} startIndex={0} />)
        const item = await screen.findAllByText("Ondricka and Sons")[0]
        waitFor(()=>{expect(item).toBeDefined})
            const button = await screen.findByText("<-")
            fireEvent.click(button)
        const itemSecondCheck = await screen.findAllByText("Ondricka")[0]
        expect(itemSecondCheck).toBe(item)
    })

})