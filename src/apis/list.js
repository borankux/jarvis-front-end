/**
 * @author mirzatsoft@163.com
 */

import request from '../libs/request'

export function getLists()
{
  return request({
    url :'/list',
    method:'get'
  });
}


export function getList(listId)
{
  return request({
    url: '/list/' + listId,
    method: 'get'
  });
}


export function createList(data)
{
  return request({
    url:'/list',
    method:'post',
    data: data
  });
}


export function updateList(id, data)
{
  return request({
    url: '/list/' + id,
    method:'put',
    data: data
  });
}

export function deleteList(id)
{
  return request({
    url: '/list/' + id,
    method: 'delete'
  });
}
