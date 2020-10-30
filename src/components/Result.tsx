import React from 'react'

export interface Props {
  link: string
  reciever: string
  message: string
  sender: string
}

const Result: React.FC<Props> = ({ link, reciever, message, sender }) => {
  return (
    <div className="result">
      <h4 style={{ color: 'white' }}>Share lolly with this link:</h4>
      <h3>{`https://jazzel-lolly/.netlify.app/lolly/${link}`}</h3>
      <div className="result__details">
        <p className="reciever">{reciever} -----</p>
        <p className="message">{message}</p>
        <p className="sender">---- {sender}</p>
      </div>
    </div>
  )
}

export default Result
