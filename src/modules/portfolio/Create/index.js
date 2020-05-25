// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// UI Imports


// App Imports
import routes from '../../../setup/routes'
import { messageShow } from '../../common/api/actions'
import { create } from '../api/actions/mutation'
import Section from '../../common/Section'

// Component
const Create = ({ classes, history }) => {
  // state
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [portfolio, setportfolio] = useState('')
  const dispatch = useDispatch()

  // on create
  const onCreate = async event => {
    event.preventDefault()

    isSubmittingToggle(true)

    try {
      const { data } = await create({ portfolio })

      isSubmittingToggle(false)

      dispatch(messageShow(data.message))

      if(data.success) {
        history.push(routes.portfolioList.path)
      }
    } catch (error) {
      isSubmittingToggle(false)

      dispatch(messageShow('Some error occurred. Please try again.'))
    }
  }

  // on change
  const onChange = event => {
    setportfolio(event.target.value)
  }

  // render
  return (
    <div>
      <Toolbar>
        <Link to={routes.portfolioList.path}>
          <IconButton className={classes.menuButton} color='inherit'>
            <IconArrowBack />
          </IconButton>
        </Link>

        <Typography variant='h6' color='inherit' className={classes.grow}>
          Create portfolio
        </Typography>
      </Toolbar>

      <Section>
        <Paper className={classes.container}>
          <form onSubmit={onCreate}>
            {/* Input - email */}
            <Grid item xs={12}>
              <TextField
                name='portfolio'
                value={portfolio}
                onChange={onChange}
                label='portfolio'
                placeholder='Enter portfolio'
                required={true}
                margin='dense'
                autoComplete='off'
                multiline
                rowsMax={20}
                fullWidth
                autoFocus
              />
            </Grid>

            {/* Button -  Save */}
            <Grid item xs={12} className={classes.buttonsContainer}>
              <Link to={routes.portfolioList.path}>
                <IconButton
                  type='submit'
                  aria-label='Close'
                >
                  <IconClose />
                </IconButton>
              </Link>

              <IconButton
                type='submit'
                aria-label='Save'
                color='primary'
                disabled={isSubmitting}
              >
                <IconCheck />
              </IconButton>
            </Grid>
          </form>
        </Paper>
      </Section>
    </div>
  )
}

// Component Properties
Create.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Create)
