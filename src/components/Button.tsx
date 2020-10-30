import React from 'react'

export interface ButtonProps {
  label: string
  onClickFunc: () => void
}
export const Button: React.FC<ButtonProps> = ({ label, onClickFunc }) => {
  return <button onClick={onClickFunc}>{label}</button>
}
