import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button key={option} btnText={option} onClick={onLeaveFeedback} />
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
