import React, { useRef } from 'react';

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = e => {
    e.preventDefault()

    console.log(inputRef.current);

    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'

    paraRef.current.innerText = "Good Bye~"
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' ref={ inputRef } className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dolorum?</p>
    </div>
  )
}

export default UseRefExample1;
