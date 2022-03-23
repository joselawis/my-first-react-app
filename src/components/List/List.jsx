import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const { items, markAsCompleted, removeTask } = props;
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${item.completed ? 'completed' : 'pending'}`}
        >
          {item.task}
          <div className="actions">
            <button
              type="button"
              className={item.completed ? 'hide' : 'done'}
              onClick={() => markAsCompleted(item.id)}
              onKeyDown={markAsCompleted(item.id)}
            >
              <i className="fa fa-check" />
            </button>
            <button
              type="button"
              className="trash"
              onClick={() => removeTask(item.id)}
              onKeyDown={removeTask(item.id)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  markAsCompleted: PropTypes.func,
  removeTask: PropTypes.func,
};

export default List;
