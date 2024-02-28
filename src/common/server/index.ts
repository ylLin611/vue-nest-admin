import { useFetch } from '@vueuse/core';
import qs from 'qs';

const baseUrl = '/';

export const useRequest = () => {
  const paramFixed = {};

  const Request = <T>(url: string, method: string) => {
    return useFetch<T>(baseUrl + url, {
      async beforeFetch({ options }) {
        options.headers = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        };
        options.method = method;
        return { options };
      },
      afterFetch(res) {
        if (!res.data.result) {
          return Promise.reject(res.data);
        }
        return res;
      },
    });
  };

  return {
    get<T>(url: string, params?: any) {
      const queryString = qs.stringify({ ...paramFixed, ...params });
      return Request<T>(url + (queryString ? `?${queryString}` : ''), 'GE`T`');
    },
    post<T>(url: string, data?: any) {
      return Request<T>(url, 'POST').post(qs.stringify({ ...paramFixed, ...data })).json<T>();
    },
    patch<T>(url: string, data?: any) {
      return Request<T>(url, 'PATCH').post(qs.stringify({ ...paramFixed, ...data })).json<T>();
    },
    delete<T>(url: string, data?: any) {
      return Request<T>(url, 'DELETE').post(qs.stringify({ ...paramFixed, ...data })).json<T>();
    },
  };
};
