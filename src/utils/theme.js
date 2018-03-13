import get from 'lodash.get'

export const themeProp = (path, defaultValue) => (props) => get(props.theme, path, defaultValue)