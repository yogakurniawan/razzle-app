import { get } from 'lodash'

export const themeProp = (path, defaultValue) => (props) => get(props.theme, path, defaultValue)