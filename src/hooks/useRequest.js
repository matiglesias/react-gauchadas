import { useState, useEffect } from 'react';
import { getRequestConfig, Backend } from '../apis/backend';

export const useRequest = (request = null, pathParams = null, queryParams = null, bodyParams = null) => {
  const [resource, setResource] = useState([]);

  const [url, method, params, data, configError] = getRequestConfig(request, pathParams, queryParams, bodyParams);

  useEffect(() => {
    if (!configError) {
      const api = new Backend();
      api.callRequest(url, method, params, data)
        .then((result) => setResource(result.data || []))
        .catch((err) => console.log(api.isCancelled(err)));

      return () => api.dispose();
    }
    //console.log(url, method, params, data, configError)
  }, [url, method, params, data, configError]);

  return resource;
};