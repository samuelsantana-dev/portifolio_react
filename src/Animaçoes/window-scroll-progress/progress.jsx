//import { propTypes } from 'react-bootstrap/esm/Image'
import PropTypes from 'prop-types';
import './src/styles.css'





export function BarraDeProgresso({ progress = 0 }){

  return (
    <>
      <svg width="50" height="50" viewBox="0 0 100 100" className="progress-wheel">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="progress"
          strokeDasharray={`${progress} ${100 - progress}`}
        />
      </svg>
    </>
  )
}
   
BarraDeProgresso.propTypes = {
  progress: PropTypes.number,
};
