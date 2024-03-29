import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

import { marked } from "marked"
import DOMPurify from "dompurify"

marked.setOptions({
  gfm: true,
  breaks: true,
})

export const markdown2Html = (content: string) => {
  // @ts-ignore
  return DOMPurify.sanitize(marked.parse(content))
}

const initialContent =
  "# Header (H1 size) \n" +
  "## Sub Header (H2 size) \n" +
  "### Sub Header (H3 size) \n" +
  "This is the [Free Code Camp Link](https://www.freecodecamp.com). \n\n" +
  "This is an inline code `<p></p>`. \n" +
  "``` \n" +
  "// this is multi-line code \n" +
  "function helloWorld() { \n" +
  "   return 'Hello World!'; \n" +
  "} \n" +
  "``` \n\n" +
  "- An unordered list item \n" +
  "  - with bulleted in level 2, \n" +
  "     - with square in level 3 \n" +
  "        - and so on. \n\n" +
  "Ordered list items \n" +
  "1. start with 1 and dot, \n" +
  "1. keep repeating it for the next item,  \n" +
  "- or you can use dashes, \n" +
  "- or asterisks to continue the numbered list items. \n\n" +
  "A table is displayed \n\n" +
  "Header 1 | Header 2 | Header 3 \n" +
  "-------- | -------- | -------- \n" +
  "Row 1 - Col 1 | Row 1 - Col 2 | Row 1 - Col 3 \n" +
  "Row 2 - Col 1 | Row 2 - Col 2 | Row 2 - Col 3 \n\n" +
  "A blockquote \n" +
  "> Block Quote! \n\n" +
  "An image \n\n" +
  "![FreeCodeCamp Logo](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_large.svg) \n\n" +
  "and finally a **Bolder Text** \n"

export interface Content {
  markdown: string
  html: string
}

export const initialState: Content = {
  markdown: initialContent,
  html: markdown2Html(initialContent),
}

export const contentSlice = createSlice({
  name: "content",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateMarkdown: (state, action: PayloadAction<Content["markdown"]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.markdown = action.payload
      state.html = markdown2Html(state.markdown)
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
})

export const { updateMarkdown } = contentSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getMarkdown = (state: RootState) => state.content.markdown
export const getHtml = (state: RootState) => state.content.html

export default contentSlice.reducer
