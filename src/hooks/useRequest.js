import { useState, useEffect } from 'react';
import { getRequestConfig, Backend } from '../apis/backend';

export const useRequest = (request = null, pathParams = null, queryParams = null, bodyParams = null) => {
  const [resource, setResource] = useState([]);

  const [url, method, params, data] = getRequestConfig(request, pathParams, queryParams, bodyParams);

  useEffect(() => {
    const api = new Backend();
    api.callRequest(url, method, params, data)
      .then((result) => setResource(result.data || []))
      .catch((err) => console.log(api.isCancelled(err)));

    return () => api.dispose();
  }, [url, method, params, data]);

  return resource
};