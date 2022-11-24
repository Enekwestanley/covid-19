import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import RenderData from '../renderData/RenderData';

const searchDisplayStyle = {
  marginBottom: '1rem',
  fontSize: '2rem',
};

const Home = () => {
  const countries = useSelector((state) => state);
  const [searchItem, setSearchItem] = useState('');
  const loadingStatus = countries.loading;
  return (
    <div>
      <div className="nav_bar">
        <div className="nav_header">Top 20 African countries COVID cases</div>
        <div>
          <AiOutlineSetting className="header-icon" />
          <FaMicrophone className="header-icon" />

        </div>
      </div>
      <div className="image_wrapper">
        <div className="image_container" />
      </div>
      <div className="search_item_container">
        <div style={searchDisplayStyle}>Africa</div>
        <div className="search-input">
          <input
            className="search-input1"
            value={searchItem}
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search by country"
          />
        </div>
      </div>
      <div className="country_link_container">
        {loadingStatus === false
          ? countries.data
            .filter(
              (country) => country.CountryName.toLowerCase().includes(searchItem.toLowerCase()),
            )
            .map(
              (country) => (
                <>
                  <RenderData
                    country={country.CountryName}
                    key={country.ID}
                    total={country.TotalConfirmed}
                  />
                </>
              ),
            ) : <h1>***Loading***</h1>}
      </div>
    </div>
  );
};

export default Home;
