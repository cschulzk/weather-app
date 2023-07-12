import styles from './searchBar.module.css'

const Suggestion = ({displayText, handleClick}: {displayText: string, handleClick: Function}) => {
  return (
    <li className={styles.suggestionContainer} onClick={(e) => handleClick(e, displayText)}>
        {displayText}
    </li>
  )
};

export default Suggestion;