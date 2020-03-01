import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import marked from "marked";
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window2 = new JSDOM('').window;
const DOMPurify = createDOMPurify(window2);

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '# Header (H1 size) \n' +
                    '## Sub Header (H2 size) \n' +
                    '### Sub Header (H3 size) \n' +
                    'This is the [Free Code Camp Link](https://www.freecodecamp.com). \n\n' +
                    'This is an inline code `<p></p>`. \n' +
                    '``` \n' +
                    '// this is multi-line code \n' +
                    'function helloWorld() { \n' +
                    '   return \'Hello World!\'; \n' +
                    '} \n' +
                    '``` \n\n' +
                    '- An unordered list item \n' +
                    '  - with bulleted in level 2, \n' +
                    '     - with square in level 3 \n' +
                    '        - and so on. \n\n' +
                    'Ordered list items \n' +
                    '1. start with 1 and dot, \n' +
                    '1. keep repeating it for the next item,  \n' +
                    '- or you can use dashes, \n' +
                    '- or asterisks to continue the numbered list items. \n\n' +
                    'A table is displayed \n\n' +
                    'Header 1 | Header 2 | Header 3 \n' +
                    '-------- | -------- | -------- \n' +
                    'Row 1 - Col 1 | Row 1 - Col 2 | Row 1 - Col 3 \n' +
                    'Row 2 - Col 1 | Row 2 - Col 2 | Row 2 - Col 3 \n\n' +
                    'A blockquote \n' +
                    '> Block Quote! \n\n' +
                    'An image \n\n' +
                    '![FreeCodeCamp Logo](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_large.svg) \n\n' +
                    'and finally a **Bolder Text** \n'
        }
        this.updateEditor = this.updateEditor.bind(this);
    }
    componentDidMount() {
        document.getElementById('preview').innerHTML = DOMPurify.sanitize(
            marked(
                this.state.content,
                {
                    gfm: true,
                    breaks: true
                }
            )
        );
    }
    updateEditor(e) {
        this.setState({
            content: e.target.value
        });
        document.getElementById('preview').innerHTML = DOMPurify.sanitize(
            marked(
                e.target.value,
                {
                    gfm: true,
                    breaks: true
                }
            )
        );
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-5">
                        <div className="toolbar">
                            <FontAwesomeIcon icon={faEye} size="lg" style={{marginRight: '10px'}} />
                            Previewer
                        </div>
                        <div id="preview"></div>
                    </div>
                    <div className="col-xs-5">
                        <div className="toolbar">
                            <FontAwesomeIcon icon={faEdit} size="lg" style={{marginRight: '10px'}} />
                            Editor
                        </div>
                        <textarea name="editor" id="editor" onChange={this.updateEditor} value={this.state.content} />
                    </div>
                    <div className="col-xs-1"></div>
                </div>
            </div>
        );
    }
}

export default Editor;
