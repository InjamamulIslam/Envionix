const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface DemoRequestData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  useCase?: string;
  preferredTime?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  details?: Record<string, unknown>[];
}

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  // Contact form submission
  async submitContact(data: ContactFormData): Promise<ApiResponse> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Demo request submission
  async requestDemo(data: DemoRequestData): Promise<ApiResponse> {
    return this.request('/demo/request', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Get available demo time slots
  async getDemoAvailability(): Promise<ApiResponse<string[]>> {
    return this.request('/demo/availability');
  }

  // Analytics event tracking
  async trackEvent(eventType: string, page: string): Promise<ApiResponse> {
    return this.request('/analytics/event', {
      method: 'POST',
      body: JSON.stringify({
        eventType,
        page,
        timestamp: new Date().toISOString(),
      }),
    });
  }

  // Get analytics stats
  async getAnalytics(): Promise<ApiResponse> {
    return this.request('/analytics/stats');
  }

  // Health check
  async healthCheck(): Promise<ApiResponse> {
    return this.request('/health', {
      method: 'GET',
    });
  }
}

export const apiClient = new ApiClient();