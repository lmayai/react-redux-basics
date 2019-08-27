# CURSO REDUX por BEdú

## Intalacion proyecto react:
- Se puede usar:
$ npx create-react-app platzi-bogs
$ npm init react-app my-app
$ yarn create react-app my-app

- Para ejecutar
$ cd platzi-blogs
$ npm start

## intalacion  de redux
$ npm install redux react-redux
$ npm install axios
$ npm install react-router-dom

## Redux

###Store
El store tiene las siguientes responsabilidades:

Contiene el estado de la aplicación
Permite el acceso al estado vía getState()
Permite que el estado sea actualizado vía dispatch(action)
Registra los listeners vía subscribe(listener)
Maneja la anuliación del registro de los listeners via el retorno de la función de subscribe(listener)

```js
import {createStore} from 'redux'
import {Provider} from 'react-redux'
```

### REducers
Las Action Creators describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.

El Provider es el componente de Redux en el cual encerraremos nuestra aplicación para que puedan comunicarse los componentes entre ellos.

### Conectar components
import { connect } from 'react-redux';
. . . 
export default connect(A,B)(Usuarios);
A: Los reducers que el provider me entregará
B: Los actions  

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducers;
};