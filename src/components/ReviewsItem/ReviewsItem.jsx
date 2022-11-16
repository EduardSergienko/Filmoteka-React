import PropTypes from 'prop-types';

export function ReviewsItem({ authorName, rewContent }) {
  return (
    <li>
      <h2>Author:{authorName} </h2>
      <p>{rewContent}</p>
    </li>
  );
}
ReviewsItem.propTypes = {
  authorName: PropTypes.string.isRequired,
  rewContent: PropTypes.string.isRequired,
};
