const BASE_URL = "http://localhost:5152"

if (!BASE_URL) {
  console.error('REACT_APP_BASE_URL is not defined');
}

export default {
  WEBSITE: {
    GET: `${BASE_URL}/api/Companys`,
    GET_SUBDOMAIN: (subdomain) => `${BASE_URL}/api/companies/subdomain/${subdomain}`,
  },
};
