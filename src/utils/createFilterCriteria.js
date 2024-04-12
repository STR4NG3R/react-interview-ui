export const createFilterCriteria = (params) => {
    if (!params) return ''
    const param = params.map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&')
    return param.length > 0 ? `?${param}` : ''
}