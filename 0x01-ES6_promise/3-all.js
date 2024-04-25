import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const profPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([profPromise, userPromise])
    .then(([profile, user]) => {
      console.log(profile.body, user.firstName, user.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
