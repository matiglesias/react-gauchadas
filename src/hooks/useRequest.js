import { useState, useEffect } from 'react';
import { callRequest, getRequestConfig, dispose, isCancelled } from '../apis/backend';

export const useRequest = (request, params = null, data = null) => {
  const [resource, setResource] = useState([]);

  const { URL, method } = getRequestConfig(request, params);

  useEffect(() => {
    callRequest(URL, method, data)
      .then((result) => setResource(result.data || []))
      .catch((err) => console.log(isCancelled(err)));

    return () => dispose();
  }, [URL, method, data]);

  return resource
};