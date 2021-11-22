import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  IcBookmarkOff,
  IcBookmarkOn,
  IcHomeOff,
  IcHomeOn,
  IcProfileOff,
  IcProfileOn,
} from '../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Bookmark':
      return focus ? <IcBookmarkOn /> : <IcBookmarkOff />;
    case 'Profile':
      return focus ? <IcProfileOn /> : <IcProfileOff />;
    default:
      return <IcHomeOn />;
  }
};

export default function BottomNavigator({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPrevenDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={String(index)}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestId}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Icon label={label} focus={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 27,
    justifyContent: 'space-between',
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderBottomWidth: 0,
  },
});
