import React,{useState} from 'react';
import Header from './Components/Header'
import UploadForm from './Components/UploadForm';
import ImageGrid from './Components/ImageGrid'
import Model from './Components/Model'

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
