import Cookies from 'js-cookie'
import config from '@/config' // cookie保存的天数

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () =>getCookie(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => setCookie(sidebarStatusKey,sidebarStatus)

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => setCookie(languageKey,language) 

const sizeKey = 'size'
export const getSize = () => getCookie(sizeKey)
export const setSize = (size: string) => setCookie(sizeKey,size) 

// User
const tokenKey = 'token'
export const getToken = () =>getCookie(tokenKey) 
export const setToken = (token: string) =>setCookie(tokenKey,token) 
export const removeToken = () => removeCookie(tokenKey)

/**
 * @desc cookies 描述 设置 Cookie 保存
 * 
 * @params 参数 key:string,value:any
 * 
 * @author Andy Huang
 * 
 * @created 2019/10/09 11:40:35
 */
export const setCookie = (key:string,value:any) => {
    //不设置path 会导致延时，不即时
       Cookies.set(key, value,{expires: config.cookieExpires || 1,path: '/'});
  }
/**
 * @desc cookies 描述 移除指定 Cookie
 * 
 * @params 参数 key:string
 * 
 * @author Andy Huang
 * 
 * @created 2019/10/09 11:40:35
 */
export const removeCookie = (key:string) => {
       Cookies.remove(key, {path: '/'});
  }

/**
 * @desc cookies 描述 获取指定 Cookie
 * 
 * @params 参数 key:string
 * 
 * @author Andy Huang
 * 
 * @created 2019/10/09 11:40:35
 */
export const getCookie = (key:string) => {
    //debugger
    const value = Cookies.get(key);
    if (value) return value
    else return false
  }


