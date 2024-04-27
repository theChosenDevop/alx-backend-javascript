import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const cRoom = new ClassRoom(19);
  const xRoom = new ClassRoom(20);
  const zRoom = new ClassRoom(34);

  return [cRoom, xRoom, zRoom];
};

export default initializeRooms;
