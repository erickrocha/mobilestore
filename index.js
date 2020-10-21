/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import Redux from './src/Redux'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Redux)
