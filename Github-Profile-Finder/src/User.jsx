import React from 'react'

function User({user}) {

    const {name ,avatar_url, followers , following , public_repos , login , created_at} = user;

    const createdDate = new Date(created_at)
  return (
    <div className=' flex justify-center items-center p-10 '>
        <div className=" flex justify-center border-1 border-black">
            <img src={avatar_url} alt="user"
            className=' rounded-full w-[50%]' />
        </div>
        <div className='gap-y-5'>
          <div>
            <a  className='font-bold text-2xl text-blue-500 ' href={`https://github.com/${login}`}>{name || login}</a>
            <p>User joined on {""}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
            </p>
        </div>
          <div>
            <p className='font-bold'> Public Repos </p>
            <p> {public_repos}</p>
          </div>
          <div>
            <p className='font-bold'> Followers </p>
            <p>{followers}</p>
          </div>
          <div>
            <p className='font-bold'> Following </p>
            <p>{following}</p>
          </div>
    </div> 
    </div>
    )
}

export default User