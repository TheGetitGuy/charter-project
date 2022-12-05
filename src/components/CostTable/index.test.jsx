import { afterEach, describe, expect, test } from "vitest";
import CostTable from "../CostTable";
import { cleanup, fireEvent, getByText, render, screen, waitFor, within } from "@testing-library/react"
afterEach(()=>{
    cleanup()
})
describe("CostTable",()=>{
    test("should match snapshot",()=>{
        expect(render(<CostTable/>)).toMatchSnapshot()
    })
    test("should show loading",()=>{
        render(<CostTable/>)
        expect(screen.getAllByText("..Loading..")[0]).toBeDefined
    })
    test("should render data", async ()=>{
        render(<CostTable></CostTable>)
        const item = await screen.findAllByText("Diane")[0]
        waitFor(()=>{expect(item).toBeDefined()})
    })
    test("data doesn't load if not received yet",()=>{
        render(<CostTable/>)
        expect(screen.queryByText("Diane")).toBeNull()
    })
    test("should change when option changed",async ()=>{
        render(<CostTable></CostTable>)
        const item = await screen.findAllByRole("row") 
        expect(within(item[1]).getByText("Diane")).toBeDefined()
        cleanup()
        render(<CostTable sortingMethod="userName"></CostTable>)
        const item2 = await screen.findAllByRole("row")
        expect(within(item2[1]).getByText("Carmichael")).toBeDefined()
        cleanup()
        render(<CostTable sortingMethod="totalPoints"></CostTable>)
        const item3 = await screen.findAllByRole("row")
        expect(within(item3[4]).getByText("Jane")).toBeDefined
    })

})