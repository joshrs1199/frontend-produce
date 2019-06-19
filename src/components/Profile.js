import React from 'react'

const Profile = () => {
  return (
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5VG9m1ylrb5mUhjEn1O8ct1ZLRou_HqGSiFK0V3wATXEHbF0Uw' alt='profile' height="125" width="100" className='profile-picture' />
      <br/>
      <button>Change</button>
      <br/>
      <input placeholder='Location' className='location'/>
      <br/>
      <input placeholder='Bio' className='bio'/>
    </div>
  )
}
export default Profile;