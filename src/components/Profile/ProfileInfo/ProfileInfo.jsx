import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
           <div>
                <img src='https://cdn.photosight.ru/img/e/615/5042409_xlarge.jpg' />
           </div>
           <div className={s.descriptionBlock}>
                ava+ description
           </div>
        </div>
    );
}
export default ProfileInfo; 