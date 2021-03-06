const React = require('react');

export default function Filter({filters, handleChange}){
     return (
        <select onChange={handleChange} defaultValue='all'>
          <option value='all'>All</option>
          {filters.map(filter =>
            <option key={filter} value={filter}>{filter}</option>
          )}
        </select>
      )
    }

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};

// refactored before and after


module.exports = Filter;
