import { Text } from 'react-native';
import { HoldItem } from 'react-native-hold-menu';
import { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { styles } from './styles';
import Animated from 'react-native-reanimated';


type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  return (
    <Animated.View  
    
    style={styles.container} 
    layout={Layout}
    entering={FadeIn}
    exiting={FadeOut}
    >
      <HoldItem items={[
        { text: title, isTitle: true },
        {
          text: 'Apagar',
          isDestructive: true,
          onPress: () => onRemove()
        }
      ]}>
      <Text style={styles.title}>#{title}</Text>
      </HoldItem>
    </Animated.View>
  );
}
