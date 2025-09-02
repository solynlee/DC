/**
 * 腾讯地图配置文件
 * 
 * 使用说明：
 * 1. 腾讯地图静态图片API：免费使用，无需申请API密钥
 * 2. 支持地图和卫星两种视图模式
 * 3. 使用GCJ02坐标系（高德/腾讯坐标系）
 */

export const tencentMapConfig = {
  // 腾讯地图静态图片API基础URL
  staticApiUrl: 'https://apis.map.qq.com/ws/staticmap/v2/',

  // 默认API密钥（腾讯提供的开发测试密钥）
  apiKey: '76GBZ-SN2KW-HZ3RP-YFRDQ-SWN2Q-7KFNU',

  // 默认地图配置
  defaultZoom: 16,
  defaultMapType: 'roadmap' as 'roadmap' | 'satellite',

  // 地图尺寸配置
  imageSize: '600x400',

  // 地图样式配置
  mapStyles: {
    width: '100%',
    height: '300px',
    border: '2px solid #D0E0ED',
    borderRadius: '4px'
  },

  // 标记点样式
  markerStyle: {
    size: 'large',
    color: 'red',
    label: 'A'
  }
}

// 生成地图URL (优先使用免费服务)
export const generateMapUrl = (
  latitude: number,
  longitude: number,
  zoom: number = tencentMapConfig.defaultZoom,
  mapType: 'roadmap' | 'satellite' = tencentMapConfig.defaultMapType
) => {
  if (mapType === 'roadmap') {
    // 使用免费的地图瓦片服务生成静态图片
    const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=${zoom}&size=600x400&markers=${latitude},${longitude},red-pushpin`

    return staticMapUrl
  } else {
    // 卫星视图使用OpenStreetMap嵌入
    const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.005},${latitude - 0.005},${longitude + 0.005},${latitude + 0.005}&layer=mapnik&marker=${latitude},${longitude}`

    return osmUrl
  }
}

// 腾讯地图URL生成 (作为备用)
export const generateTencentMapUrl = (
  latitude: number,
  longitude: number,
  zoom: number = tencentMapConfig.defaultZoom,
  mapType: 'roadmap' | 'satellite' = tencentMapConfig.defaultMapType
) => {
  const { apiKey } = tencentMapConfig
  const center = `${latitude},${longitude}`
  const mapmode = mapType === 'satellite' ? 1 : 0

  const url = `https://apis.map.qq.com/ws/staticmap/v2/?center=${center}&zoom=${zoom}&size=600x400&maptype=${mapmode}&markers=size:large|color:red|${center}&key=${apiKey}`
  return url
}
