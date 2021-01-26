import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Border} from '../assets/bevel.svg'
import BeveledBorder from './BevelBorder'

interface Values {
  id: string,
  isValid: boolean,
  touched: boolean,
  value: string,
  validation: any
}
interface Props {
  type: string,
  label: string,
  values: Values,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const FormInput = ({label, onChange, values: {id, isValid, touched, value='', validation}}: Props) => {
  return (
    <FieldWrapper>
      <InputWrapper
        as={id==='message' ? 'textarea' : 'input'} 
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={id==='email' ? 'email' : 'text'}
        minLength={validation.minLength}
        required={validation.isReq}
      />

      <BeveledBorder />
      {console.log(validation.message)}
      <LabelWrapper value={value}>{validation.message !== '' && touched ? validation.message : label}</LabelWrapper>
    </FieldWrapper>
  )
}

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  padding-top: 15px;

  textarea {
    height: 150px;
  }
`
const LabelWrapper = styled.label<Pick<Props, any>>`
  position: absolute;
  height: 100%;
  top: 25px;
  left: 5px;
  transition: .3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  ${props=>{
    if(props.value!=='') return `
      top: 0;
      font-size: ${props.theme.fontSize.caption};
    `
  }}
  ${FieldWrapper}:focus-within & {
    font-size: ${({theme})=>theme.fontSize.caption};
    top: 0;
  }
`
const InputWrapper = styled.input.attrs(props => ({
  type: props.type
}))<any>`
  background-color: rgba(0,0,0, 0.1);
  border: none;
  font-size: ${({theme})=>theme.fontSize.body};
  line-height: ${({theme})=>theme.line.body};
  color: ${({theme})=>theme.color.offwhite};
  padding: calc(${({theme})=>theme.fontSize.body} / 2);
  box-sizing: border-box;
  width: 100%;
  :invalid {

  }
  :invalid + svg {
    fill: red;
    border: 1px solid red;
    stroke: url(#faded-line-neg);
  }
`
const StyledBorder = styled(Border)`
  position: absolute;
  height: 80%;
  width: 600px;
  max-width: 100%;
  right: 0;
  bottom: 0;
  pointer-events: none;
  fill: transparent;
  overflow: visible;
  stroke: url(#faded-line);
  
  ${InputWrapper}:invalid {
      border: 1px solid red;
    }
  
  #faded-line {
    --color-0: ${({theme})=> theme.color.bgMain};
    --color-100: ${({theme})=> theme.color.neon};
  }
  #faded-line-neg {
    --color-0: ${({theme})=> theme.color.bgMain};
    --color-100: ${({theme})=> theme.color.negative};
  }
`


export default FormInput