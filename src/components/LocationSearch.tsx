import { useState } from 'react';
import { LocationSearchProps } from '../model/Weather';

export const LocationSearch = ({ onSearch }: LocationSearchProps) => {
  const [locationSearch, setLocationSearch] = useState('');
  const disableSearch: boolean = locationSearch.trim() === '';

  const addLocation = (): void => {
    onSearch(locationSearch);
    setLocationSearch('');
  };

  const handleLocationSearch = (e) => {
    setLocationSearch(e.target.value);
    if (e.key === 'Enter') {
      addLocation();
    }
  };

  return (
    <>
      <div className="col-12 pb-2">
        <div className="d-flex flex-row">
          <input
            placeholder="Add locations"
            className="form-control d-flex"
            type="text"
            value={locationSearch}
            onChange={handleLocationSearch}
            onKeyPress={handleLocationSearch}
          />
          <button
            className="btn btn-primary d-flex mx-2"
            onClick={addLocation}
            disabled={disableSearch}
            data-testid="search-btn"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
