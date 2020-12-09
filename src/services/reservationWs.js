import {_axios} from "./api";


export const getUserReservations = () => {
  return axios.get(`/reservation`);
};

export const createReservation = (reservation) => {
  return axios.post(`/reservation`, reservation);
};

export const updateReservation = (reservation) => {
  return axios.patch(
    `/reservation/${reservation._id}`,
    reservation
  );
};

export const deleteReservation = (id) => {
  return axios.delete(`/reservation/${id}`);
};

