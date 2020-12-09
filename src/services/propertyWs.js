

import {_axios} from "./api";



export const getProperties = () => {
  return axios.get(`/property`);
};

export const getPropertiesByUser = (id) => {
  return axios.get(`/property?owner=${id}`);
};

export const getPropertyDetail = (id) => {
  return axios.get(`/property/${id}`);
};

export const createProperty = (params) => {
  return axios.post(`/property`, params.property);
};

export const updateProperty = (params) => {
  return axios.patch(`/property/${params.id}`, params.property);
};


export const deleteProperty = (id) => {
    return axios.delete(`/property/${id}`);
}