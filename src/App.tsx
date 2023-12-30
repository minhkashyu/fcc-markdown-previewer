import React from "react"

import Editor from "./features/editor/Editor"
import Previewer from "./features/editor/Previewer"

import Header from "./features/Header"
import Footer from "./features/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App py-3">
      <Header />

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <div className="card h-100">
              <div className="card-img-top bg-dark text-white text-center p-3">
                <FontAwesomeIcon icon={faEdit} size="lg" className="me-2" />
                Editor
              </div>
              <div className="card-body">
                <Editor />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-img-top bg-dark text-white text-center p-3">
                <FontAwesomeIcon icon={faEye} size="lg" className="me-2" />
                Previewer
              </div>
              <div className="card-body">
                <Previewer />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
