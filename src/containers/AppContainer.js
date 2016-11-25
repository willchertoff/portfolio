import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Specialties from '../components/Specialties';
import WorkingOn from '../components/WorkingOn';
import Footer from '../components/Footer';
import { fetchProjectsIfNeeded } from '../actions/ProjectActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  specialties: PropTypes.array.isRequired,
  sortedProjects: PropTypes.array.isRequired,
};

class AppContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProjectsIfNeeded());
  }
  render() {
    const { name, subTitle, specialties, sortedProjects } = this.props;
    return (
      <div className="wrapper">
        <Title
          name={name}
          subTitle={subTitle}
        />
        <Specialties
          specials={specialties}
        />
        <WorkingOn
          projects={sortedProjects}
        />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { staticData, projects } = state;
  const { name, subTitle, specialties } = staticData;
  const { data } = projects;
  /* eslint-disable max-len */
  const sortedProjects = data.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 5);
  /* eslint-enable max-len */
  return {
    name,
    subTitle,
    sortedProjects,
    specialties,
    data,
  };
}

AppContainer.propTypes = propTypes;

export default withRouter(connect(mapStateToProps)(AppContainer));
