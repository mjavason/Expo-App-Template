import { RoutesConst } from '@/constants/routes.constant';
import { router, useLocalSearchParams } from 'expo-router';
import { Menu, X } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  BackHandler,
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const MENU_WIDTH = Math.min(SCREEN_WIDTH * 0.8, 320);

const SideMenuNav = () => {
  const { topic } = useLocalSearchParams<{ topic?: string }>();

  const [isOpen, setIsOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(-MENU_WIDTH)).current;

  const sectionsList = ['Apple', 'Orange', 'Banana', 'Grape'];
  const openMenu = () => {
    setIsOpen(true);

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -MENU_WIDTH,
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) setIsOpen(false);
    });
  };

  const backdropOpacity = slideAnim.interpolate({
    inputRange: [-MENU_WIDTH, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    if (!isOpen) return;

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        closeMenu();
        return true;
      },
    );

    return () => subscription.remove();
  }, [isOpen]);

  const handleSectionClick = (name: string) => {
    if (topic === name) {
      closeMenu();
      return;
    }

    closeMenu();

    router.push({
      pathname: RoutesConst.COMING_SOON,
    });
  };

  return (
    <View className='relative z-50'>
      {/* Menu toggle */}
      <Pressable
        onPress={isOpen ? closeMenu : openMenu}
        className='h-11 w-11 items-center justify-center rounded-lg bg-white active:opacity-70'
      >
        {isOpen ? (
          <X size={24} color='#222222' />
        ) : (
          <Menu size={24} color='#222222' />
        )}
      </Pressable>

      {/* Slide-out menu */}
      <Modal
        visible={isOpen}
        transparent
        animationType='none'
        statusBarTranslucent
        onRequestClose={closeMenu}
      >
        <View className='flex-1 flex-row'>
          {/* Menu panel - LEFT */}
          <Animated.View
            style={{
              width: MENU_WIDTH,
              transform: [{ translateX: slideAnim }],
              backgroundColor: 'rgba(0,0,0,0.9)',
            }}
            className='h-full px-5 pt-20'
          >
            {/* Close button */}
            {/* <Pressable
              onPress={closeMenu}
              className='absolute right-5 top-12 z-10 h-10 w-10 items-center justify-center rounded-lg bg-white/10'
            >
              <X size={24} color='white' />
            </Pressable> */}

            {/* Sections */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName='gap-5 pb-10 p-4'
            >
              {sectionsList.map(
                (section, idx) =>
                  section && (
                    <Pressable
                      key={idx}
                      onPress={() => handleSectionClick(section)}
                      className='w-full rounded-lg border-2 border-[#f2f2f2] p-4 active:bg-white/10 active:scale-[0.98]'
                    >
                      <Text className={`font-bold text-base text-white`}>
                        {section}
                      </Text>
                    </Pressable>
                  ),
              )}
            </ScrollView>
          </Animated.View>
          {/* Backdrop - RIGHT */}
          <Animated.View
            style={{
              flex: 1,
              opacity: backdropOpacity,
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <Pressable onPress={closeMenu} className='flex-1' />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default SideMenuNav;
