import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Images from './components/images';
import { Route, Routes } from "react-router";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const navigate = useNavigate();
  const {groups} = useSelector((state) => state.searchGroups);

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
        {groups.map((item, i) => <Route key={i} path={`/${item.link}`} element={<Images searchGroup={item.label} />} />)}
        <Route
          exact
          path="/"
          element={<Navigate replace to="/people" />}
        />
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
