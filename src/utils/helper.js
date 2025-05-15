// eslint-disable-next-line
export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-next-line
export const validName = /^[A-Za-z]+$/;
export const validPhoneno = /^[0-9]{6,10}$/;
export const validPaasword =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// export const ENDPOINTURL = "https://sjbackend.onrender.com/api/v1";
export const ENDPOINTURL = "http://localhost:8080/api/v1";
// export const URL = "https://sjbackend.onrender.com/";
export const URL = "http://localhost:8080/";

export const listBody = (data) => {
  return {
    where: data.where,
    pagination: {
      sortBy: data?.sortBy ? data.sortBy : "createdAt",
      descending: true,
      rowsPerPage: data?.perPage ? data.perPage : 10000,
      page: data?.page ? data.page : 1,
    },
  };
};

export const delBody = (data) => {
  return {
    data,
  };
};
export function formateNum(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
