import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';

export default function Button({ label, onPress, isSelected }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.buttonContainerPressed,
        isSelected && styles.buttonContainerSelected,
      ]}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={[styles.buttonLabel, isSelected && styles.buttonLabelSelected]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#200",
    paddingHorizontal: 20,
  },
  buttonContainerPressed: {
    backgroundColor: "blue",
  },
  buttonContainerSelected: {
    backgroundColor: "gold",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonLabelSelected: {
    fontWeight: 'bold',
  },
});
