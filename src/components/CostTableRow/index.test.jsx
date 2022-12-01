import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, test, expect } from "vitest";
import CostTableRow from "../CostTableRow";
const testingData = {
    name: "bazinga",
    totalCost: 10,
    purchaseDate: "2022-10-13T07:59:22Z",
    rewardPoints: 12,
    totalRewardPoints: 13,
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