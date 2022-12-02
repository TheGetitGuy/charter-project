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
        expect(screen.getAllByText("..Loading..")[0]).toBeDefined
    })
    test("should render data", async ()=>{
        render(<CostTable></CostTable>)
        const item = await screen.findAllByText("Tiff")[0]
        waitFor(()=>{expect(item).toBeDefined()})
    })
    test("data doesn't load if not received yet",()=>{
        render(<CostTable/>)
        expect(screen.queryByText("Tiff")).toBeNull()
    })

})