const Input = ({ props}) => {
    let {type, veriaint ,Validation} = props
    return (
        <input  type={type} veriaint={veriaint} Validation={Validation}/>
    )
}

export default Input