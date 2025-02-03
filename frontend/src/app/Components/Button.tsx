import React from 'react'
type ButtomProps = {
    text: string
    textSize?: string

}
const Button: React.FC<ButtomProps> = ({text})=> {
  return (
    <a href="/signup" className="magic-button relative overflow-hidden px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition-transform duration-300">
        <span className="relative z-10">{text}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  )
}

export default Button