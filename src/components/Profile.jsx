import React from 'react';
import  s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg" alt="" />
        </div>
        <div className={s.item}>
            ava + description
        </div>
        <div className={s.item} >
            my post
        </div>
        <div className={s.item}>
            New post
        </div>
        <div className={s.item}>
            post 1
        </div>
        <div className={s.item}>
            post 2
        </div>
    </div>
    
   

}
export default Profile; 