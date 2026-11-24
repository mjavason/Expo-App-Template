import { RoutesConst } from '@/constants/routes.constant';
import { router } from 'expo-router';
import { authStorage } from './auth-storage.util';

async function getErrorMessage(res: Response): Promise<string> {
  try {
    const data = await res.json();

    return data?.message || JSON.stringify(data);
  } catch {
    return 'Request failed';
  }
}

export function buildUrl(
  baseUrl: string,
  param: Record<string, string | number> = {},
  query: Record<string, string> = {},
): string {
  let url = baseUrl;

  Object.entries(param).forEach(([key, value]) => {
    url = url.replace(`:${key}`, encodeURIComponent(value));
  });

  const queryString = new URLSearchParams(query).toString();

  if (queryString) {
    url += `?${queryString}`;
  }

  return url;
}

async function handleAuthError(status: number) {
  if (status === 401) {
    await authStorage.removeToken();

    router.replace(RoutesConst.HOME);

    throw new Error('Session expired');
  }
}

export async function getJson<T>(url: string): Promise<T> {
  const token = await authStorage.getToken();

  const headers: HeadersInit = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  await handleAuthError(res.status);

  if (!res.ok) {
    throw new Error(await getErrorMessage(res));
  }

  return res.json() as Promise<T>;
}

export async function mutateJson<TOutput>(
  url: string,
  body: unknown,
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'POST',
  param: Record<string, string | number> = {},
  query: Record<string, string> = {},
): Promise<TOutput> {
  const token = await authStorage.getToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(buildUrl(url, param, query), {
    method,
    headers,
    ...(method !== 'GET' && method !== 'DELETE'
      ? { body: JSON.stringify(body) }
      : {}),
  });

  await handleAuthError(res.status);

  if (!res.ok) {
    throw new Error(await getErrorMessage(res));
  }

  return res.json() as Promise<TOutput>;
}
