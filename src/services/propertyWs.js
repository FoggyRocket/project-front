

import {_axios} from "./api";



export const getProperties = () => {
  return _axios.get(`/property`);
};

export const getPropertiesByUser = (id) => {
  return _axios.get(`/property?_owner=${id}`);
};

export const getPropertyDetail = (id) => {
  return _axios.get(`/property/${id}`);
};

export const createProperty = (params) => {
  return _axios.post(`/property`, params.property);
};

export const updateProperty = (params) => {
  return _axios.patch(`/property/${params.id}`, params.property);
};


export const deleteProperty = (id) => {
    return _axios.delete(`/property/${id}`);
}