import {_axios} from "./api";


export const getUserReservations = () => {
  return _axios.get(`/reservation`);
};

export const createReservation = (reservation) => {
  return _axios.post(`/reservation`, reservation);
};

export const updateReservation = (reservation) => {
  return _axios.patch(
    `/reservation/${reservation._id}`,
    reservation
  );
};

export const deleteReservation = (id) => {
  return _axios.delete(`/reservation/${id}`);
};

