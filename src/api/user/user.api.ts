import { ApiResponseType } from '@/api/common/types/api-response.type';
import { MyProfileType } from '@/api/common/types/my-profile.type';
import { CacheKeys } from '@/constants/keys.constants';
import { useApiQuery } from '@/hooks/use-api-query.hook';

export function useGetProfile() {
  return useApiQuery<ApiResponseType<MyProfileType>>(
    [CacheKeys.PROFILE],
    '/user/profile',
    {
      onSuccess: () => {},
    },
  );
}
