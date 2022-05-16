import { request } from '../network/request';

// 获取轮播图
export async function getBannerInfo(params: Number) {
    return await request({
        url: `/banner?type=${params}`,
        method: 'get',
    });
}
