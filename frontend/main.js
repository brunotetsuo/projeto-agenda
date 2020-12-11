import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Cadastro from './modules/Login';

const login = new Cadastro('.form-login');
const cadastro = new Cadastro('.form-cadastro');

login.init();
cadastro.init();

// import './assets/css/style.css';

