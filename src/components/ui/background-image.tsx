import { Image } from 'react-native';

function BackgroundImage({ source }: { source: any }) {
  return (
    <Image
      source={source}
      resizeMode='cover'
      className='absolute inset-0 h-full w-full'
      pointerEvents='none'
    />
  );
}

export default BackgroundImage;
