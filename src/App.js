import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Images from './components/images';
import { Route, Routes } from "react-router";
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const handleClick = (searchInput) => {
    navigate(`/search/${searchInput}`);
  }

  const ImagesRender = () => {
    const { searchInput } = useParams();
    return <Images searchGroup={searchInput} />;
  };

  return (
    <Box className="App">
      <Header searchClicked={(e) => handleClick(e)} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/people" />}
        />

        <Route
          index 
          path="/people"
          element={<Images searchGroup="people" />}
        />
        <Route path="/football" element={<Images searchGroup="football" />} />
        <Route path="/food" element={<Images searchGroup="food" />} />
        <Route path="/beach" element={<Images searchGroup="beach" />} />
        <Route
          path="/search/:searchInput"
          element={<ImagesRender />}
        />
        <Route path="*" element={<Images searchGroup="people" />} />
      </Routes>
    </Box>
  );
}

export default App;
