import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#cbe8f1', dark: '#0e1d23' }}
      headerImage={
        <Image
          
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lanez Parking</ThemedText>
        <ThemedText>Find and book parking spots in real-time</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Get Started</ThemedText>
        <ThemedText>
          Login to check available parking spaces near you.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Real-time Updates</ThemedText>
        <ThemedText>
          All parking spot data updates in real-time.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 4,
    marginBottom: 16,
    alignItems: 'center',
  },
  stepContainer: {
    marginBottom: 12,
    gap: 6,
  },
  headerImage: {
    height: 180,
    width: '100%',
    resizeMode: 'cover',
  },
});
