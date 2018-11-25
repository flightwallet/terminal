export const URL_PARAMS_PARSED = 'URL_PARAMS_PARSED'

export function setURLParams(newParams) {
  return {
    type: URL_PARAMS_PARSED,
    params: newParams,
  }
}

export function parseURLParams(location) {
  const search = location.search;

  const params = search.slice(1).split("&")
    .map((str) => str.split("="))
    .reduce((obj, [key, value]) => ({ [key]: value, ...obj }), {})

  console.log('params', params)

  return {
    type: URL_PARAMS_PARSED,
    params: params,
  }
}
