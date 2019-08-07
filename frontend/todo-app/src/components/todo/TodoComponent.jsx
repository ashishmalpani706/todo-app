import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : 'Learn Forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        let user = AuthenticationService.getLoggedInUser()
        TodoDataService.retreiveTodo(user, this.state.id)
          .then(response => this.setState({description : response.data.description,
            targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')}))
    }
    
    onSubmit(values) {
        TodoDataService.updateTodo(AuthenticationService.getLoggedInUser(), this.state.id, {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }).then(() => this.props.history.push('/todos'))
        console.log(values);
    }

    validate(values) {
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Description should have at least 5 characters'
        }
        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid date'
        }
        return errors
    }

    render() {
        let {description, targetDate} = this.state
        return ( 
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik initialValues = {{description, targetDate}} onSubmit={this.onSubmit}
                    validate = {this.validate} validateOnBlur={false} validateOnChange={false}
                        enableReinitialize={true}> 
                {
                    (props) => (
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"/>
                            </fieldset>
                            <button type="submit" className="btn btn-success">Save</button>
                        </Form>
                    ) 
                }</Formik>
            </div>
        </div> )
    }
}

export default TodoComponent;