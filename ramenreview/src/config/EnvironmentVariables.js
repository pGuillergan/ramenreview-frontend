export const REACT_APP_SERVER_PORT = `8081`;
export const REACT_APP_SERVER_DOMAIN = `http://localhost:${REACT_APP_SERVER_PORT}`;

export const GET_BRAND_LIST = `/get_brands_list`
export const GET_STYLE_LIST = `/get_style_list`
export const GET_COUNTRY_LIST = `/get_country_list`
export const GET_STARS_LIST = `/get_stars_list`

export const GET_FILTERS_LIST = [GET_BRAND_LIST, GET_STYLE_LIST, GET_COUNTRY_LIST, GET_STARS_LIST]