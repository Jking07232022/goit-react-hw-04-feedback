import PropTypes from 'prop-types';
import css from './statistics.module.css'

export const Statistics = ({ Good, Neutral, Bad, total, positivePercentage }) => {
  return (
    <div className="statisctics">
      <p className={css.inputs}>Good: <span>{Good}</span></p>
      <p className={css.inputs}>Nuetral: <span>{Neutral}</span></p>
      <p className={css.inputs}>Bad: <span>{Bad}</span></p>
      <p className={css.total}>Total: <span>{total}</span></p>
      <p className={css.percentage}>Positive feedback: <span>{positivePercentage}</span>%</p>
    </div>
  )
}


Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}