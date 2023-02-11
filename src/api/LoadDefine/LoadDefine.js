 import request from '@/utils/request'

export function savePackageB(packageB) {
  return request({
    url: '/deneme/yukBildir',
    method: 'post',
    data:packageB
  })
}
export function savePackageL(packageL) {
  return request({
    url: '/deneme/bildirimListesi',
    method: 'post',
    data:packageL
  })
}
export function savePackageUnit(Units) {
  return request({
    url: '/deneme/paramYukBirimi',
    method: 'post',
    data:Units
  })
}
export function savePackageTour(Tour) {
  return request({
    url: '/deneme/yukTuru',
    method: 'post',
    data:Tour
  })
}