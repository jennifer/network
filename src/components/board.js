import React from 'react';
import CompanySummary from './company-summary';
import PersonSummary from './person-summary';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCompanyData } from '../actions/network-actions';
import { getPersonData } from '../actions/network-actions';
import { Link } from 'react-router-dom';
import '../stylesheets/board.css';

export class Board extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCompanyData(this.props.username));
    this.props.dispatch(getPersonData(this.props.username));
  }

  render() {

    return (
      <div>
        <div className='grid-wrapper'>
          <div className='company col'>Company
            <Link to='/company-form'>
              <div className='tool-tip'><FontAwesomeIcon icon='plus' className='icon' />
                <span className='tool-tip-text'>Add a company</span>
              </div>
            </Link>
          </div>
          <div className='identify col' index='0'>Identified a person</div>
          <div className='contact col' index='1'>Made contact</div>
          <div className='response col' index='2'>Got a response</div>
          <div className='followup col' index='3'>Sent a follow-up</div>
          <div className='referral col' index='4'>Got a referral!</div>

          <div className='companies'>
            {this.props.companies.map(function(company, index){
              return (
                <CompanySummary company={company} key={index} index={index} />
              )
            })} 
          </div>
          <div className='people'>
            {this.props.people.map(function(person, index){
              return (
                <PersonSummary person={person} key={index} index={index} />
              )
            })} 
          </div>
        </div>  
        
        
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    companies: state.network.companies,
    people: state.network.people,
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(Board);