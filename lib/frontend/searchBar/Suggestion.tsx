import styles from './searchBar.module.css'

const Suggestion = ({idString, handleSubmit}: {idString: string, handleSubmit: Function}) => {
  return (
    <li className={styles.suggestionContainer} onClick={(e) => handleSubmit(e, idString)}>
        {idString}
    </li>
  )
};

export default Suggestion;