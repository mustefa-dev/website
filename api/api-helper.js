const BASE_URL = "http://192.168.242.137:5152";

if (!BASE_URL) {
  console.error('REACT_APP_BASE_URL is not defined');
}

export default {
  WEBSITE: {
    GET_SUBDOMAIN: (subdomain) => `${BASE_URL}/api/companies/subdomain/${subdomain}`,
    GET_BLOGS: (subdomain) => `${BASE_URL}/api/blogs/subdomain/${subdomain}`,
  },
};