import { get, post, put } from "./web.request";
import { ENDPOINTURL } from "../utils/helper";

export const loginHandlerData = (body) => {
  return post(`${ENDPOINTURL}/user/signin`, body);
};
export const categoryHndlerData = (body) => {
  return post(`${ENDPOINTURL}/category/list`, body);
};
export const addcategoryHandler = (body) => {
  return post(`${ENDPOINTURL}/category`, body);
};
export const editcategoryHandler = (id, body) => {
  return put(`${ENDPOINTURL}/category/${id}`, body);
};
export const getcategoryHandler = (id) => {
  return get(`${ENDPOINTURL}/category/${id}`);
};

//banner

export const bannerHndlerData = (body) => {
  return post(`${ENDPOINTURL}/banner/list`, body);
};




//career
export const careerHndlerData = (body) => {
  return post(`${ENDPOINTURL}/career/list`, body);
};


//contact
export const contactHandler = (body) => {
  return post(`${ENDPOINTURL}/contact`, body);
};

//gold
export const goldencategoryData = (body) => {
  return post(`${ENDPOINTURL}/golden/list`, body);
};

//sliver
export const slivercategoryData = (body) => {
  return post(`${ENDPOINTURL}/product/list`, body);
};

export const sliverProductListData = (body) => {
  return post(`${ENDPOINTURL}/product/list`, body);
};


//products
export const goldProductsListData = (body) => {
  return post(`${ENDPOINTURL}/goldenproduct/list`, body);
};

export const goldproductData = (id) => {
  return get(`${ENDPOINTURL}/goldenproduct/${id}`);
};
