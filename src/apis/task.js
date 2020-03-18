/**
 * @author mirzatsoft@163.com
 * @date 2020-03-19 05:05:15
 */

import request from '../libs/request'

export function createTask(data, projectId = null, listId = null)
{
  data.project_id = projectId;
  data.list_id = listId;

  return request({
    url: '/task',
    data: data
  });
}

export function getTask(taskId)
{
  return request({
    url: '/task/' + taskId,
    method: 'get'
  });
}

export function getTasks()
{
  return request({
    url:'/tasks',
    method: 'get'
  });
}

export function updateTask(taskId, data)
{
  return request({
    url: '/task/' + taskId,
    method: 'put',
    data: data
  });
}

export function deleteTask(taskId)
{
  return request({
    url: '/task/' + taskId,
    method:'delete'
  });
}

export function finishTask(id)
{
  updateTask(id, {
    status: 1
  })
}

export function undoTask(id)
{
  updateTask(id, {
    status: 0
  })
}
