import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
export const fields = [ 'username', 'password', 'age' ]

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'Must be 5 characters or more'
    }

    return errors
}


class LoginForm extends Component {
    save(data) {
        alert(JSON.stringify(data, null, 2));
    }

    render() {
        const { fields: { username, password }, resetForm, handleSubmit, submitting } = this.props
        return (<form class="form-horizontal" onSubmit={handleSubmit(this.save.bind(this))}>
                <div class={'form-group' + (username.touched && username.error ? ' has-error' : '')}>
                    <label class="col-xs-4 control-label">Username</label>
                    <div class={'col-xs-' + (username.touched && username.error ? '5' : '8')}>
                        <input type="text" class="col-xs-8 form-control" placeholder="Username" {...username}/>
                    </div>
                    {username.touched && username.error && <div class="col-xs-3 help-block">{username.error}</div>}
                </div>
                <div class={'form-group' + (password.touched && password.error ? ' has-error' : '')}>
                    <label class="col-xs-4 control-label">Password</label>
                    <div class={'col-xs-' + (password.touched && password.error ? '5' : '8')}>
                        <input type="password" class="col-xs-8 form-control" placeholder="Password" {...password}/>
                    </div>
                    {password.touched && password.error && <div class="col-xs-3 help-block">{password.error}</div>}
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg" style={{ margin: 10 }} disabled={submitting}>
                        {submitting ? <i class="fa fa-cog fa-spin"/> : <i class="fa fa-paper-plane"/>} Submit
                    </button>
                    <button type="button" class="btn btn-default btn-lg" style={{ margin: 10 }} disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}

export default reduxForm({
    form: 'loginForm',
    fields,
    validate
})(LoginForm)
