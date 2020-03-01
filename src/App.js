import React from 'react';
import './sass/App.scss';
import Header from './components/partials/header.jsx';
import Footer from './components/partials/footer.jsx';
import Editor from './components/partials/editor.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Editor />
            <Footer />
        </div>
    );
}

export default App;
