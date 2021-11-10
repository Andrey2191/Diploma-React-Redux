import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClick,
}) {
  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClick(null)}
          >
            Все
          </li>

          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClick(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

export default Categories;

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};
