import React from 'react';
import './styles.css';

const Candidate = ({ candidate, setCandidateId }) =>
  <div
    className="candidate-name"
    onClick={() => {
      setCandidateId(candidate.id);
    }}
  >
    {candidate.name}
  </div>;

const Details = ({ candidate }) =>
  <div>
    <div>
      {candidate.name}
    </div>
    <div>
      {candidate.phoneNumber}
    </div>
    <div>
      {candidate.yearsExperience}
    </div>
  </div>;

class Candidates extends React.Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      candidateId: null
    };

    this.setCandidateId = this.setCandidateId.bind(this);
  }

  setCandidateId(candidateId) {
    this.setState({ candidateId });
  }

  componentDidMount() {
    fetch('http://localhost:9000/candidates')
      .then(response => response.json())
      .then(data => {
        this.setState({ candidates: data });
        return data;
      })
      .catch(errorData => console.error(errorData));
  }

  render() {
    const id = this.state.candidateId;
    return this.state.candidates.length > 0
      ? <div className="candidates">
          <div className="candidates-list">
            {this.state.candidates.map(candidate =>
              <Candidate
                setCandidateId={this.setCandidateId}
                key={candidate.id}
                candidate={candidate}
              />
            )}
          </div>
          <div className="candidate-details">
            {id
              ? <Details candidate={this.state.candidates[id - 1]} />
              : 'No Candidate selected'}
          </div>
        </div>
      : <span>NO CANDIDATES</span>;
  }
}

export default Candidates;
