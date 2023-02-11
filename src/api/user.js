import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/auth/signin',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/api/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
export function xpersonsave(data) {
  return request({
    url: '/api/auth/signup',//url herneyse
    method: 'post',
    data
  })
}
