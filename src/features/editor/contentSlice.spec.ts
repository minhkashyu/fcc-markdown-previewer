import contentReducer, {
  markdown2Html,
  initialState,
  updateMarkdown,
} from "./contentSlice"

describe("content reducer", () => {
  it("should handle initial state", () => {
    expect(contentReducer(undefined, { type: "unknown" })).toEqual(initialState)
  })

  it("should handle updateMarkdown", () => {
    let markdown = "### Sub Header (H3 size)"
    const actual = contentReducer(initialState, updateMarkdown(markdown))
    expect(actual.markdown).toEqual(markdown)
    expect(actual.html).toEqual(markdown2Html(markdown))
  })
})
