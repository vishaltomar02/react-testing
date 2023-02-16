export const SimpleForm = () => {
  return (
    <>
    <div>
      <p>Please Fill the form</p>
    </div>
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value="Vishal" onChange={() => {}}/>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName"/>
      </div>
      <div>
        <label htmlFor="city">City You live in</label>
        <select id="city">
          <option value="">Select the City</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="termsConditions"/>
          I agree to the terms and conditions
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )
}