import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.Type)}:{props.alert.Message}</strong>
    </div>
  )
}

export default Alert