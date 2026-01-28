import React from 'react'


const FormInfo = ({info, onInputChange}) => {
  return (
    <div className="form-info">
        <form>
            <input type="text" name='name' placeholder='Name' value={info.name} onChange={onInputChange} />
            <input type="text" name='email' placeholder='Email' value={info.email} onChange={onInputChange} />
            <input type="text" name='age' placeholder='Age' value={info.age} onChange={onInputChange} />

        </form>
    </div>
  )
}

export default FormInfo