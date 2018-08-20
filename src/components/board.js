import React from 'react';
import CompanyCard from './company-card';
import '../stylesheets/board.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const companies = [
  {
    name: 'Sample Company 1',
    companyLink: 'https://www.builtincolorado.com/companies',
    location: 'Denver, CO',
    description: 'Lorem ipsum dolor sit amet',
    jobTitle: 'Full Stack Engineer',
    jobLink: 'https://www.indeed.com/',
    jobDesc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    applied: '1/2/2018',
    notes: 'Integer vel dolor orci. Nunc mauris lectus, cursus sed placerat nec, consequat et turpis.'
  },
  {
    name: 'Sample Company 2',
    companyLink: 'https://www.builtincolorado.com/companies',
    location: 'Boulder, CO',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    jobTitle: 'Web Developer',
    jobLink: 'https://www.indeed.com/',
    jobDesc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    applied: '6/22/2018',
    notes: 'Quisque sed metus at leo tincidunt molestie non a lorem. Curabitur tempus tincidunt tincidunt.'
  },
  {
    name: 'Sample Company 3',
    companyLink: 'https://www.builtincolorado.com/companies',
    location: 'Denver, CO',
    description: 'Excepteur sint occaecat cupidatat non proident',
    jobTitle: 'Junior Front-End Developer',
    jobLink: 'https://www.indeed.com/',
    jobDesc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    applied: '10/30/2018',
    notes: 'Fusce ornare, orci quis scelerisque hendrerit, odio orci sollicitudin ex, id convallis neque ipsum a lorem.'
  }
];

const people = [
{
  name: 'Emily Engineer',
  title: 'Full-Stack Web Developer',
  company: 'Sample Company 1',
  location: 'Denver, CO',
  links: 'https://www.linkedin.com',
  connection: 'LinkedIn',
  contacts: {
    date: '7/20/2018',
    method: 'LinkedIn'
  },
  notes: 'Fusce ornare, orci quis scelerisque hendrerit, odio orci sollicitudin ex, id convallis neque ipsum a lorem.',
  status: 1
},
{
  name: 'Daphne Dev',
  title: 'Front-End Engineer',
  company: 'Sample Company 2',
  location: 'Boulder, CO',
  links: 'https://www.linkedin.com',
  connection: 'Mutual friend',
  contacts: {
    date: '7/15/2018',
    method: 'email'
  },
  notes: 'Quisque sed metus at leo tincidunt molestie non a lorem. Curabitur tempus tincidunt tincidunt.',
  status: 3
}
];

export default function Board(props) {
  return(
    <table>
      <tbody>
        <tr>
          <th>Company
            <div className='tool-tip'><FontAwesomeIcon icon='plus' />
              <span className='tool-tip-text'>Add a company</span>
            </div>
          </th>
          <th className='identify' scope='col'>Identified a person</th>
          <th className='contact' scope='col'>Made contact</th>
          <th className='response' scope='col'>Got a response</th>
          <th className='followup' scope='col'>Sent a follow-up</th>
          <th className='referral' scope='col'>Got a referral!</th>
        </tr>
          {companies.map(function(company, index){
            const filterPeople = people.filter(person => person.company === company.name && person.status === 1);
            return (
              <CompanyCard company={company} index={index} />
            )
          })}
          {/* Move to person-card component 
          {people.map(function(person, index){
            return (
              <div>
                <td>
                  <h1 key={ index }>{person.name}</h1>
                  <p key={ index }>{person.title}</p>
                </td>
              </div>
            )
          })}
          */}
      </tbody>
    </table>
  )
};