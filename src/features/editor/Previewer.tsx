import React from "react"
import { useAppSelector } from "../../app/hooks"

import { getHtml } from "./contentSlice"

export default function Previewer(props: any) {
  const html = useAppSelector(getHtml)
  return (
    <div
      id="preview"
      className="w-100 h-100"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}
