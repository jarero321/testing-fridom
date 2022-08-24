import { FunctionComponent } from 'react'

interface ButtonProps {
  text: string
  handleClick(): void
  height?: string
  width?: string
  loading?: boolean
  secondary?: boolean
  className?: string
  disabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({
  text,
  handleClick,
  height,
  width,
  className,
  disabled
}) => {
  return (
    <button
      type="button"
      onClick={ !disabled ? handleClick : () => undefined }
      style={
        height || width ? { height: height ?? '', width: width ?? '' } : {}
      }
      className={ !disabled ? `w-full h-[40px] rounded-2xl flex items-center justify-center text-white bg-[#0FC2C0]  ${className}` : `w-full h-[40px] rounded-2xl flex items-center justify-center text-white opacity-60 bg-[#0FC2C0] ${className}` }
    >
        { text }
    </button>
  )
}

export default Button
