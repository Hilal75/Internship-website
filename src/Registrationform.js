import React from 'react'
import { NavLink } from 'react-router-dom';

const Registrationform = () => {
  return (
    <div>
        <div className="container">
  <form>
    <div className="row text-[]">
      <h4 >Account</h4>
      <div className="input-group input-group-icon">
        <input type="text" placeholder="Full Name"/>
        <div className="input-icon"><i className="fa fa-user"></i></div>
      </div>
      <div className="input-group input-group-icon">
        <input type="email" placeholder="Email Adress"/>
        <div className="input-icon"><i className="fa fa-envelope"></i></div>
      </div>
    </div>
    <div className="row">
      <div className="col-half">
        <h4>Please select available time</h4>

        <h4>From</h4>

        <div className="input-group">
          <div className="col-third">
            <input type="text" placeholder="DD"/>
          </div>
          <div className="col-third">
            <input type="text" placeholder="MM"/>
          </div>
          <div className="col-third">
            <input type="text" placeholder="YYYY"/>
          </div>
        </div>

        <h4>To</h4>

        <div className="input-group">
          <div className="col-third">
            <input type="text" placeholder="DD"/>
          </div>
          <div className="col-third">
            <input type="text" placeholder="MM"/>
          </div>
          <div className="col-third">
            <input type="text" placeholder="YYYY"/>
          </div>
        </div>
      </div>
      <div className="col-half">
        <h4>Gender</h4>
        <div className="input-group">
          <input id="gender-male" type="radio" name="gender" value="male"/>
          <label for="gender-male">Male</label>
          <input id="gender-female" type="radio" name="gender" value="female"/>
          <label for="gender-female">Female</label>
        </div>
      </div>
    </div>

      <h4 className='ml-[-15px]'>Please write down all the amenities available</h4>

        <textarea rows={3} cols={3} className=' w-full bg-[#f9f9f9] ml-[-15px] amenities'/>

        <NavLink to={"/"}>
          <button className='bg-[#bc1939] px-[35px] py-1 rounded-md ml-[-15px] mt-4'>
            Submit
          </button>
        </NavLink>


  </form>
</div>
    </div>
  )
}

export default Registrationform