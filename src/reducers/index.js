import { combineReducers } from 'redux'
import home from './Home';
import about from './About';
import skills from './Skills';
import experience from './Experience';
import education from './Education';
import portfolio from './Portfolio';
import contact from './Contact'

const rootReducer = combineReducers({
  home,
  about,
  skills,
  experience,
  education,
  portfolio,
  contact
})

export default rootReducer
