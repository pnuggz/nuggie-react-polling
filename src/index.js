import React from 'react';
import PropTypes from 'prop-types';

const Example = props => {
  const { sample } = props;

  return (
    <React.Fragment>
      <div sample={sample}>Test</div>
    </React.Fragment>
  );
};

Example.propTypes = {
  sample: PropTypes.string,
};

Example.defaultProps = {
  sample: null,
};

export default Example;
