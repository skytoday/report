/*
 * @Author: zyk
 * @Date: 2020-07-13 15:13:37
 * @Last Modified by: zyk
 * @Last Modified time: 2021-03-04 10:46:26
 */
import request from '@/utils/request'
import { add, del, edit, preview } from '@/api/deviceInfo'
// datasource
export function pageList(params) {
  return request({
    url: '/business/dataSource/pageList',
    method: 'get',
    params,
  })
}
export function dataSource(data) {
  return request({
    url: '/business/dataSource/' + data.id,
    method: 'get',
    data,
  })
}
// delete datasource
export function deleteDataSource(data) {
  return request({
    url: '/business/dataSource/' + data.id,
    method: 'delete',
    data,
  })
}
export function testConnection(data) {
  return request({
    url: '/business/dataSource/testConnection',
    method: 'post',
    data,
  })
}
export function addDataSource(data) {
  return request({
    url: '/business/dataSource',
    method: 'post',
    data,
  })
}
export function editDataSource(data) {
  return request({
    url: '/business/dataSource',
    method: 'put',
    data,
  })
}
// resultset
export function dataSetPreview(data) {
  return request({
    url: `/business/dataSet/detailBysetId/${data.id}`,
    method: 'get',
  })
}

export function addDataSet(data) {
  return request({
    url: '/business/dataSet',
    method: 'post',
    data,
  })
}
export function editDataSet(data) {
  return request({
    url: '/business/dataSet',
    method: 'put',
    data,
  })
}
// delete dataset
export function deleteDataSet(data) {
  return request({
    url: '/business/dataSet/' + data.id,
    method: 'delete',
    data,
  })
}
// 下拉数据源
export function queryAllDataSourceSet(data) {
  return request({
    url: '/business/dataSource/queryAllDataSource',
    method: 'get',
    data,
  })
}
// 数据集高级规则js验证
export function verificationSet(data) {
  return request({
    url: '/business/dataSetParam/verification',
    method: 'post',
    data,
  })
}
// 测试数据转换，以及返回数据table列表
export function testTransformSet(data) {
  return request({
    url: '/business/dataSet/testTransform',
    method: 'post',
    data,
  })
}

// report
export function reportPageList(params) {
  return request({
    url: '/business/report/pageList',
    method: 'get',
    params,
  })
}
// report
export function addReport(data) {
  return request({
    url: '/business/report',
    method: 'post',
    data,
  })
}

// report
export function editReport(data) {
  return request({
    url: '/business/report',
    method: 'put',
    data,
  })
}

// report
export function delReport(data) {
  return request({
    url: '/business/report/delReport',
    method: 'delete',
    data,
  })
}

// report
export function detailReport(id, accessKey) {
  return request({
    url: `/business/report/${id}?accessKey=${accessKey}`,
    method: 'get',
  })
}

// reportExcel
export function addReportExcel(data) {
  return request({
    url: '/business/reportExcel',
    method: 'post',
    data,
  })
}

// reportExcel
export function editReportExcel(data) {
  return request({
    url: '/business/reportExcel',
    method: 'put',
    data,
  })
}


export default { add, edit, del, preview }