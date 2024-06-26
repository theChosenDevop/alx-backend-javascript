import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, photo] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: 'fulfilled', value: user },
      { status: 'fulfilled', value: photo },
    ];
  } catch (error) {
    return [{ status: 'rejected', value: error.message }];
  }
}

export default handleProfileSignup;
