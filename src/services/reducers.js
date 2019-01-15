import { reducer as formReducer } from 'redux-form';
import Auth from './Auth/reducers';

export default {
  form: formReducer,
  Auth,
}