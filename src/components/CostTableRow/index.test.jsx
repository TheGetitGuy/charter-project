import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, test, expect } from "vitest";
import CostTableRow from "../CostTableRow";
const testingData = {
    userName: "bazinga",
    points:{ 
        "3":12,
        "4":122,
        "5":11,
    }
    
}
afterEach(()=>{
    cleanup()
})
describe("Table Row",()=>{
    test("renders a given dataset",()=>{
        const row = render(<CostTableRow data={testingData}  ></CostTableRow>)
        expect(row.findByText("bazinga")).toBeDefined()
        expect(row.findByText("2022-10-13T07:59:22Z")).toBeDefined()
        expect(row.findByText("10")).toBeDefined()
        expect(row.findByText("12")).toBeDefined()
        expect(row.findByText("13")).toBeDefined()
    }) 

})