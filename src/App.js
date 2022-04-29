import React from 'react';
import Header from './Components/Header'
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/ImageGrid'

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
