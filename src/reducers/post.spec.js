import reducer from "./todo"

describe("Post reducer", () => {
  test("returns a state object", () => {
    const result = reducer(undefined, { type: "ANYTHING" })
    expect(result).toBeDefined()
  })
})
