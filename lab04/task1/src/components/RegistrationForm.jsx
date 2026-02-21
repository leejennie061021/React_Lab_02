import { useState } from "react"

function RegistrationForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [ageError, setAgeError] = useState("")
  const [success, setSuccess] = useState(false)

  const validateName = (value) => {
    if (!value) return "Name is required"
    if (value.length < 2) return "Minimum 2 characters"
    return ""
  }

  const validateEmail = (value) => {
    if (!value) return "Email is required"
    const regex = /[\s@]+@[\s@]+\.[\s@]+/
    if (!regex.test(value)) return "Invalid email format"
    return ""
  }

  const validateAge = (value) => {
    if (!value) return "Age is required"
    if (Number(value) < 18) return "Must be 18+"
    return ""
  }

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page reload

    const nError = validateName(name)
    const eError = validateEmail(email)
    const aError = validateAge(age)

    setNameError(nError)
    setEmailError(eError)
    setAgeError(aError)

    if (nError || eError || aError) return

    setSuccess(true)
    setName("")
    setEmail("")
    setAge("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          const value = e.target.value
          setName(value)
          setNameError(validateName(value))
        }}
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          const value = e.target.value
          setEmail(value)
          setEmailError(validateEmail(value))
        }}
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => {
          const value = e.target.value
          setAge(value)
          setAgeError(validateAge(value))
        }}
      />
      {ageError && <p style={{ color: "red" }}>{ageError}</p>}

      <button type="submit">Submit</button>

      {success && (
        <p style={{ color: "green" }}>Registration successful!</p>
      )}
    </form>
  )
}

export default RegistrationForm