import React from 'react';
import CompanyCard from './company-card';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCompanyData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import '../stylesheets/board.css';

export class Board extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
  }

  render() {

    return (

      <div className='grid-wrapper'>
        <div className='company-head col'>Company
          <Link to='/company-form'>
            <div className='tool-tip'><FontAwesomeIcon icon='plus' className='icon' />
              <span className='tool-tip-text'>Add a company</span>
            </div>
          </Link>
        </div>
        <div className='identify col'>Identified</div>
        <div className='contact col'>Made contact</div>
        <div className='response col'>Got a response</div>
        <div className='followup col'>Followed-up</div>
        <div className='referral col'>Got a referral!</div>
        {this.props.companies && this.props.companies.map((company, index) => {
          return (
            <CompanyCard company={company} key={index} index={index} />
          )
        })}
      </div>  
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.network.companies,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(Board);

/*
  renderPersonCard(filterPeople, index) {
    const personCard = {
      gridRowStart: `${index}` + 2,
      gridRowEnd:`${index}` + 3
    };
    filterPeople.map(function(person, index){
      return (
        <div className='people' style={personCard} >
          <PersonSummary person={person} key={index} index={index} />
        </div>
      )
    }
  }
*/