import { useState, useEffect } from 'react';
import { getRequestConfig, callRequest, dispose, isCancelled } from '../apis/backend';

export const useRequest = (request, pathParams = null, queryParams = null, bodyParams = null) => {
  const [resource, setResource] = useState([]);

  const requestConfig = getRequestConfig(request, pathParams, queryParams, bodyParams);

  useEffect(() => {
    callRequest(requestConfig)
      .then((result) => setResource(result.data || []))
      .catch((err) => console.log(isCancelled(err)));

    return () => dispose();
  }, [requestConfig]);

  return resource
};