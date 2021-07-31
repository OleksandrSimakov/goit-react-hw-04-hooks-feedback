import SectionEl from './Section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <SectionEl>
      <h2>{title}</h2>
      {children}
    </SectionEl>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
