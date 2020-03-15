/**
 * @author mirzatsoft@163.com
 */

import request from '../libs/request'


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

}


/**
 * @param pid
 */
export function updateProject(pid) {

}

/**
 * @param pid
 */

export function deleteProject(pid) {

}
