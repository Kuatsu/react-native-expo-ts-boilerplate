import I18n from 'i18n-js';
import React from 'react';
import {
  Button, View, useColorScheme, StyleSheet,
} from 'react-native';
import Text from '../components/Text';
import { useGetLoremIpsum } from '../hooks/query/loremIpsum';
import { getThemedStyles } from '../utils/helpers';
import useStore from '../hooks/useStore';

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const styles = themedStyles[colorScheme || 'light'];

  const { count, incrementCount } = useStore();
  const loremIpsum = useGetLoremIpsum();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{I18n.t('screens.home.welcomeText')}</Text>
      <Button
        onPress={() => incrementCount()}
        title={I18n.t('screens.home.buttonTitle', { count })}
        testID="increase_count_button"
      />
      <Text style={[styles.text, styles.title]}>{I18n.t('screens.home.loremIpsumTitle')}</Text>
      <Text style={[styles.text, styles.textCenter]} testID="lorem_ipsum_text">
        {loremIpsum.isSuccess ? loremIpsum.data.text : 'Couldn\'t load Lorem Ipsum text... 😢'}
      </Text>
    </View>
  );
};

export default HomeScreen;

const baseStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 20,
  },
});

const lightStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#222',
  },
});

const darkStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
  },
});

const themedStyles = getThemedStyles(baseStyles, lightStyles, darkStyles);
