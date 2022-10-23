import { useState } from 'react';
import { profile } from './components/Profile';
import { Wrap } from './components/Styled';

function App() {
  const [result, setResult] = useState([]);
  const search = (e) => {
    setResult(profile.filter((item) => item.nim.toString() === e.target.value));
  };

  return (
    <Wrap>
      <h1>Data Aegis</h1>
      <div className="container">
        <input id="textInput" type="text" onChange={search} />
        <h5>Search by NIM</h5>
        <div className="hasil">
          {result.length === 0 ? (
            <p className="error">Data Tidak Ada</p>
          ) : (
            result.map((item) => (
              <div className="card" key={item.nim}>
                <p>{item.nama_lengkap}</p>
                <p>{item.nama_panggilan}</p>
                <p>{item.nomor_telepon}</p>
                <p>{item.id_line}</p>
                <p>{item.nim}</p>
                <p>{item.email}</p>
                <p>{item.hobi}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='kel'>
      <h3>Tugas Modul 2 - Kelompok 28</h3>
        <h5>Cinka Sihaloho - 21120119120007</h5>
        <h5>Rahmadien Akbariza Syifa Ul Haq - 21120119140144</h5>
        <h5>I Wayan Widnya Pradipta - 21120119130052</h5>
        <h5>Hafshah Qurrata Ayun - 21120119140123</h5>
        </div>
    </Wrap>
  );
}

export default App;