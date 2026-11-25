import BackgroundImage from '@/components/ui/background-image';
import { hqBg } from '@/media/faculty-bg';
import { Pressable, Text, View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center bg-slate-950 px-6'>
      <BackgroundImage source={hqBg} />
      <View className='w-full rounded-2xl bg-white p-6'>
        <Text className='text-2xl font-bold text-slate-900'>NativeWind</Text>

        <Text className='mt-2 text-slate-500'>
          Tailwind styling in React Native.
        </Text>

        <Pressable
          className='mt-5 rounded-xl bg-blue-600 p-4 active:bg-blue-700'
          onPress={() => console.log('Pressed')}
        >
          <Text className='text-center font-semibold text-white'>
            Test Button
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
