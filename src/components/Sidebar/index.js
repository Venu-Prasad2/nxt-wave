import React, { useState, useEffect } from 'react';
import './index.css';

const Sidebar = ({ filters, setFilters }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setShowSidebar(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (section, value, checked) => {
    let newValues = filters[section] ? [...filters[section]] : [];

    if (value === 'Unselect') {
      newValues = [];
    } else if (checked) {
      newValues.push(value);
    } else {
      newValues = newValues.filter((v) => v !== value);
    }

    setFilters({
      ...filters,
      [section]: newValues,
    });
  };

  const filterSections = [
    'Ideal For',
    'Occasion',
    'Work',
    'Fabric',
    'Segment',
    'Suitable For',
    'Raw Materials',
    'Pattern',
  ];
  const dropdownOptions = ['Unselect', 'Men', 'Women', 'Baby + Kids'];

  return (
    <>
      {isMobile && (
        <div className="mobile-filter-header">
          <span className="items-count">3425 ITEMS</span>
          <button
            className="filter-toggle-link"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <span className="arrow">&lt;</span>
            {showSidebar ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>
      )}

      {showSidebar && (
        <aside className="sidebar">
          <label className="customizable-checkbox">
            <input
              type="checkbox"
              checked={filters.customizable}
              onChange={(e) =>
                setFilters({ ...filters, customizable: e.target.checked })
              }
            />
            Customizable
          </label>

          {filterSections.map((section) => {
            const key = section.replace(/\s+/g, '').toLowerCase();

            return (
              <div className="filter-section" key={section}>
                <div
                  className="filter-title"
                  onClick={() => toggleSection(key)}
                >
                  {section} ▾
                </div>

                {expandedSections[key] && (
                  <div className="filter-options">
                    {dropdownOptions.map((option) => (
                      <label key={option}>
                        <input
                          type="checkbox"
                          value={option}
                          checked={
                            option === 'Unselect'
                              ? false
                              : filters[key]?.includes(option) || false
                          }
                          onChange={(e) =>
                            handleFilterChange(
                              key,
                              option,
                              e.target.checked
                            )
                          }
                        />{' '}
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </aside>
      )}
    </>
  );
};

export default Sidebar;
