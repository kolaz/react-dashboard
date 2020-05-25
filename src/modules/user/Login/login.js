import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

// UI Import
import {
  Container, Col, Form,
  FormGroup, Input,
  Button, Spinner
} from 'reactstrap';
import './styles.scss'

// App Imports
import { login } from '../api/actions/query'
import AuthCheck from '../../auth/AuthCheck'

// Component
const Login = ({ classes }) => {
  // state
  const [user, setUser] = useState({ email: '', password: '' })
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // on login
  const onLogin = async event => {
    event.preventDefault()

    if(!isEmpty(user.email) && !isEmpty(user.password)) {
      dispatch(login(user))
    }
  }

  // on change
  const onChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Container className="login-wrap">
        <Form className="login-inner">
        <h3>Sign In</h3>
        <form onSubmit={onLogin}>
          {/* Input - email */}
          <Col>
            <FormGroup>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={onChange}
                id="email"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          {/* Input - password */}
          <Col>
            <FormGroup>
              <Input
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                id="password"
                placeholder="Password"
              />
            </FormGroup>
          </Col>
          {/* Button -  Save */}
          <Button type="submit" disabled={isLoading} color="primary" className="button">LOGIN</Button>
          {isLoading && (
          <Spinner color="primary" />
          )}
          </form>
        </Form>
        
        {/* Auth Check */}
        <AuthCheck />
      </Container>
  )
}


// Component Properties
Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Login

