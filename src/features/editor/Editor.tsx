import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { getMarkdown, updateMarkdown } from "./contentSlice"

export default function Editor(props: any) {
  const dispatch = useAppDispatch()
  const markdown = useAppSelector(getMarkdown)

  return (
    <div className="w-100 h-100" style={{ minHeight: 500 }}>
      <textarea
        name="editor"
        id="editor"
        onChange={(e) => {
          dispatch(updateMarkdown(e.target.value))
        }}
        value={markdown}
        className="w-100 h-100 border-0"
        style={{ outline: "none" }}
      />
    </div>
  )
}
