import { useLogout } from '@/api/auth/auth.api';
import { useGetProfile } from '@/api/user/user.api';
import { RoutesConst } from '@/constants/routes.constant';
import { defaultProfilePicture, logoLg } from '@/media';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface TopNavbarProps {
  title?: string;
}

export const TopNavbar = ({ title = 'Home' }: TopNavbarProps) => {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);
  const { logout } = useLogout();

  const { data: { data: profile } = { data: undefined } } = useGetProfile();

  const handleLogout = () => {
    setMenuVisible(false);
    logout();
  };

  return (
    <View className='w-full'>
      <View className='flex-row items-center justify-between px-5 py-5'>
        {/* Logo and title */}
        <Pressable
          onPress={() => router.push(RoutesConst.EXPLORE)}
          className='flex-row items-center gap-4'
        >
          <Image
            source={logoLg}
            resizeMode='contain'
            style={{
              width: '50%',
            }}
          />

          <Text className='text-xl font-extrabold uppercase text-white'>
            {title}
          </Text>
        </Pressable>

        {/* Profile menu trigger */}
        <Pressable
          onPress={() => setMenuVisible(true)}
          className='h-11 w-11 overflow-hidden rounded-full border-2 border-white'
        >
          <Image
            source={
              profile?.pictureUrl
                ? { uri: profile.pictureUrl }
                : defaultProfilePicture
            }
            resizeMode='cover'
            className='h-full w-full'
          />
        </Pressable>
      </View>

      {/* Profile dropdown */}
      <Modal
        visible={menuVisible}
        transparent
        animationType='fade'
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
          <View className='flex-1 bg-black/20'>
            <TouchableWithoutFeedback>
              <View className='absolute right-5 top-20 w-40 overflow-hidden rounded-xl border-2 border-[#f2f2f2] bg-white'>
                <Pressable
                  onPress={() => {
                    setMenuVisible(false);
                    router.push(RoutesConst.COMING_SOON);
                  }}
                  className='px-4 py-3 active:bg-[#FFE8B6]'
                >
                  <Text className='font-semibold text-gray-800'>Profile</Text>
                </Pressable>

                <Pressable
                  onPress={handleLogout}
                  className='px-4 py-3 active:bg-[#FFE8B6]'
                >
                  <Text className='font-semibold text-gray-800'>Logout</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
