import React from "react";

import Header from "./components/Header";
// import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import FileUploader from "./components/FileUploader";

function App() {

    const onFileChange = (files) => {
        console.log("HERE WORK")
        console.log(files);
    }

    return (
        <div>
            <Header />
            <FileUploader onFileChange={(files) => onFileChange(files)}/>
            {/*<MainContent />*/}
            <Footer />
        </div>
    )
}

export default App;