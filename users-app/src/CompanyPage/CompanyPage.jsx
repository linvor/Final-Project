import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class CompanyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            company: {
                companyName: '',
                address: '',
                serviceOfActivity: '',
                numberOfEmployees: '',
                description: '',
                type: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { company } = this.state;
        this.setState({
            company: {
                ...company,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { company } = this.state;
        if (company.companyName && company.address && company.type) {
            this.props.register(company);
        }
    }
 
    render() {
        const { registering  } = this.props;
        const { company, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>New company</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !company.companyName ? ' has-error' : '')}>
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" className="form-control" name="companyName" value={company.companyName} onChange={this.handleChange} />
                        {submitted && !company.companyName &&
                            <div className="help-block">Company Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !company.address ? ' has-error' : '')}>
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" value={company.address} onChange={this.handleChange} />
                        {submitted && !company.address &&
                            <div className="help-block">Company address is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !company.serviceOfActivity ? ' has-error' : '')}>
                        <label htmlFor="serviceOfActivity">Service of activity</label>
                        <input type="text" className="form-control" name="serviceOfActivity" value={company.serviceOfActivity} onChange={this.handleChange} />
                        {submitted && !company.serviceOfActivity &&
                            <div className="help-block">Company service of activity is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !company.numberOfEmployees ? ' has-error' : '')}>
                        <label htmlFor="numberOfEmployees">Number of employees</label>
                        <input type="text" className="form-control" name="numberOfEmployees" value={company.numberOfEmployees} onChange={this.handleChange} />
                        {submitted && !company.numberOfEmployees &&
                            <div className="help-block">Company number of employees is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !company.description ? ' has-error' : '')}>
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" name="description" value={company.description} onChange={this.handleChange} />
                        {submitted && !company.description &&
                            <div className="help-block">Description is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !company.type ? ' has-error' : '')}>
                        <label htmlFor="type">Type</label>
                        <input type="text" className="form-control" name="type" value={company.type} onChange={this.handleChange} />
                        {submitted && !company.type &&
                            <div className="help-block">Type is required</div>
                        }
                    </div>
                    <div>
                        <button className="btn btn-primary">Add</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}   

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}



export { CompanyPage };
