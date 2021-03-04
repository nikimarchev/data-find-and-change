import React from 'react'
import './ChangedData.css'

const ChangedData = ({ data, word }) => {
  let dataArr = [];
  let sign = '';
  const isHighlighted = (w, theWord) => {
    if (w.toUpperCase().includes(theWord.toUpperCase())) {
      if (w.match(/([,\.\:!\?])/)) {
        sign = w.substring(w.length - 1, w.length)
        w = w.substring(w[0], w.length - 1)
        if (w.toUpperCase() == theWord.toUpperCase()) {
          dataArr.push(<span className='highLight'>{w}</span>)
          dataArr.push(<span>{sign}</span>)
        }
      } else {
        if (w.toUpperCase() == theWord.toUpperCase()) {
          dataArr.push(<span className='highLight'>{w} </span>)
        } else {
          dataArr.push(<span>{w} </span>)
        }
      }
    } else {
      dataArr.push(<span>{w} </span>)
    }
  }

  return (
    <div>
      <div className="textBox">
        {
          data
            .split(' ')
            .map((w) =>
              isHighlighted(w, word)
            )
        }
        {dataArr}
      </div>
    </div>
  )
}

export default ChangedData
