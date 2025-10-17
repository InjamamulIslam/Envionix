import { useState, useCallback } from 'react';
import { apiClient, type ContactFormData, type DemoRequestData, type ApiResponse } from '../services/api';

export interface UseApiState<T = unknown> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T = unknown>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (apiCall: () => Promise<ApiResponse<T>>) => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        const response = await apiCall();
        
        if (response.success) {
          setState({
            data: response.data || null,
            loading: false,
            error: null,
          });
        } else {
          setState({
            data: null,
            loading: false,
            error: response.message,
          });
        }
        
        return response;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        setState({
          data: null,
          loading: false,
          error: errorMessage,
        });
        
        return {
          success: false,
          message: errorMessage,
        };
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}

// Specific hooks for common API operations
export function useContact() {
  const api = useApi();

  const submitContact = useCallback(
    (data: ContactFormData) => api.execute(() => apiClient.submitContact(data)),
    [api]
  );

  return {
    ...api,
    submitContact,
  };
}

export function useDemo() {
  const demoApi = useApi();
  const availabilityApi = useApi<string[]>();

  const requestDemo = useCallback(
    (data: DemoRequestData) => demoApi.execute(() => apiClient.requestDemo(data)),
    [demoApi]
  );

  const getAvailability = useCallback(
    () => availabilityApi.execute(() => apiClient.getDemoAvailability()),
    [availabilityApi]
  );

  return {
    demo: demoApi,
    availability: availabilityApi,
    requestDemo,
    getAvailability,
  };
}

export function useAnalytics() {
  const api = useApi();

  const trackEvent = useCallback(
    (eventType: string, page: string) => api.execute(() => apiClient.trackEvent(eventType, page)),
    [api]
  );

  return {
    ...api,
    trackEvent,
  };
}