/**
 * @author mirzatsoft@163.com
 */

import request from '../libs/request'


export  function createProject(data)
{
  return request({
    url: '/project',
    method: 'post',
    data: data
  });
}


export function getProjects() {
  return request({
    url:'/project',
    method:'GET'
  });
}

/**
 * @param pid
 */
export function getProject(pid) {
  return request({
    url:'/project/' + pid,
    method:'get'
  });
}


/**
 * @param pid
 * @param data
 */
export function updateProject(pid, data) {
  return request({
    url:'/project/' + pid,
    method:'put',
    data: data
  });
}

/**
 * @param pid
 */

export function deleteProject(pid) {
  return request({
    method:'delete',
    url:'/project/' + pid,
  });
}
