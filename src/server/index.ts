import {useFetch} from '@vueuse/core'
import qs from "qs";
const baseUrl = '/'
export const useRequest = () => {
  const paramFixed = {}
  /**
   * 去请求方式
   */
  return {
    post<T>(url: string, data?: any) {
      const json = Request<T>(url).post(qs.stringify({ ...paramFixed, ...data })).json<T>();
      return json
    }
  }
}
function Request<T>(url: string) {
  return useFetch<T>(baseUrl + url, {
    /**
     * 请求之前
     * @param param0 
     * @returns 
     */
    async beforeFetch({ options }) {
      /**
       * 设置header头
       */
      options.headers = {
        /**
         * 表单方式提交
         */
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
      return { options }
    },
    /**
     * 请求之后
     * @param res 
     * @returns 
     */
    afterFetch(res) {
      // TODO error
      if (!res.data.result) {
        // ElMessage.error(res.data.msg??res.data.message)
        return Promise.reject(res.data)
      }
      return res
    }
  })
}
