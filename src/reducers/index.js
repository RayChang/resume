import { combineReducers } from 'redux'
import home from './Home';
import about from './About';
import skills from './Skills';
import experience from './Experience';
import education from './Education';
import portfolio from './Portfolio';
import contact from './Contact'

const lang = function(state = 'en', action) {
  switch(action.type) {
    case 'SET_LANG':
      return state = (action.lang === 'false' || !action.lang) ? 'en' : action.lang;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  home,
  about,
  skills,
  experience,
  education,
  portfolio,
  contact,
  lang
})

export default rootReducer
