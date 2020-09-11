import React from 'react'
import PropTypes from 'prop-types'

const Icones = (props) => {
  const renderList = (item, index) =>  <span key={index}>{item}</span>

  return (
    <div className="icones">
      <div>
        <button onClick={() => props.addCount()}>
          Add
        </button>
      </div>
      <div>{props.text1}</div>
      <div>{props.text2}</div>
      <div>{props.text2}</div>
      <div>
        {props.lista.map((item, index) => renderList(item, index) )}
      </div>
    </div>
  )
}

Icones.propTypes =  {
  addCount: PropTypes.func,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  lista: PropTypes.array
}


Icones.defaultProps = {
  text1: 'Meu Texto 1',
  text2: 'Meu Texto 2',
  text3: 'Meu Texto 3',
  lista: []
}



export default Icones