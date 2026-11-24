import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ComingSoon() {
  return (
    <SafeAreaView className='flex-1 bg-[#09090B'>
      <StatusBar barStyle='light-content' />

      <View className='flex-1 px-6 justify-between py-12'>
        {/* Brand */}
        <View className='flex-row items-center gap-2'>
          <View className='h-10 w-10 rounded-xl bg-violet-500 items-center justify-center'>
            <Text className='text-white font-bold text-lg'>E</Text>
          </View>

          <Text className='text-white text-xl font-bold tracking-wide'>
            ExpoApp
          </Text>
        </View>

        {/* Main content */}
        <View className='items-center'>
          <View className='border border-violet-400/30 bg-violet-500/10 rounded-full px-4 py-2 mb-6'>
            <Text className='text-violet-300 text-xs font-semibold tracking-widest uppercase'>
              Something exciting is coming
            </Text>
          </View>

          <Text className='text-white text-5xl font-extrabold text-center leading-tight'>
            The future is <Text className='text-violet-400'>almost here.</Text>
          </Text>

          <Text className='text-gray-400 text-base text-center leading-7 mt-5 max-w-sm'>
            We're building something extraordinary. A new experience designed to
            inspire, connect, and make things better.
          </Text>

          {/* Launch date */}
          <View className='flex-row items-center mt-10 bg-[#18181D] rounded-2xl px-5 py-4 border border-white/10'>
            <View className='h-3 w-3 rounded-full bg-violet-400 mr-3' />
            <Text className='text-gray-300 text-sm'>
              Launching soon — stay tuned
            </Text>
          </View>

          {/* Waitlist */}
          <View className='w-full mt-10'>
            <Text className='text-white text-sm font-semibold mb-3'>
              Be the first to know
            </Text>

            <View className='flex-row items-center border border-white/10 bg-[#15151A] rounded-2xl px-4 py-2'>
              <TextInput
                placeholder='Enter your email address'
                placeholderTextColor='#71717A'
                keyboardType='email-address'
                autoCapitalize='none'
                className='flex-1 text-white py-3'
              />

              <TouchableOpacity className='bg-violet-500 rounded-xl px-5 py-3'>
                <Text className='text-white font-semibold'>Join</Text>
              </TouchableOpacity>
            </View>

            <Text className='text-gray-600 text-xs text-center mt-3'>
              No spam. Just launch updates.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View className='items-center'>
          <Text className='text-gray-600 text-xs'>
            © {new Date().getFullYear()} ExpoApp. All rights reserved.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
