import { ApiMethods } from '@/constants/index.constants';
import { RoutesConst } from '@/constants/routes.constant';
import { router } from 'expo-router';
import { useQueryClient } from 'react-query';
import { useApiMutation } from '../../hooks/use-api-mutation.hook';
import { authStorage } from '../../utils/auth-storage.util';
import { ApiResponseType } from '../common/types/api-response.type';
import { LoginInputType, LoginResponseType } from './types/login.type';

export function useLogin() {
  const qc = useQueryClient();

  return useApiMutation<LoginInputType, ApiResponseType<LoginResponseType>>(
    '/auth/sign_in',
    ApiMethods.POST,
    [],
    {
      onSuccess: async (data) => {
        qc.clear();

        const res = data.data;

        await Promise.all([
          authStorage.setToken(res.token),
          authStorage.setUserType(res.userType),
        ]);

        router.replace(RoutesConst.EXPLORE);
      },
    },
  );
}
