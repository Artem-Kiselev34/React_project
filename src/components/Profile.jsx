import s from './Profile.module.css';

const Profile = () => {
	return  <div className='content'>
	<div><img className='baner' src='https://cstor.nn2.ru/userfiles/data/ufiles/2018-06/e2/a4/54/5b2509c35949b_1024933856d6a09.jpg' /></div>
	<div><img src='https://img.claz.org/t/400x320/q7rawk-GUMGEQRRXhgRVUFbQQVFUVkYAltcAhFZX0UTAhwIFVlcAhgGXgNBVkBYRwRFUyhSAGcxIxA' /> </div>
	<div>ava + discrition</div>
	<div>
		<div>My post</div>
		<div>New post</div>
	</div>
	<div className={s.post}>
	  <div className={s.item}>post1</div>
	  <div className={s.item}>post2</div>
	</div>
  </div>
}

export default Profile;