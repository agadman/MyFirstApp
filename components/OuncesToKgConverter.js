import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OuncesToKgConverter = () => {
  const [kilograms, setKilograms] = useState('');
  const [ounces, setOunces] = useState('');

  const handleKilogramsChange = (value) => {
    setKilograms(value);
    if (value === '') {
      setOunces('');
      return;
    }
    const kilogramsValue = parseFloat(value);
    const ouncesValue = kilogramsValue * 35.274; // Conversion factor: 1 kg = 35.274 oz
    setOunces(ouncesValue.toFixed(2).toString());
  };

  const handleOuncesChange = (value) => {
    setOunces(value);
    if (value === '') {
      setKilograms('');
      return;
    }
    const ouncesValue = parseFloat(value);
    const kilogramsValue = ouncesValue / 35.274; // Conversion factor: 1 oz = 0.0283495 kg
    setKilograms(kilogramsValue.toFixed(2).toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ounces(Oz)"
        value={ounces}
        onChangeText={handleOuncesChange}
        keyboardType="numeric"
      />
      <FontAwesome name="exchange" size={20} color="white" />
      <TextInput
        style={styles.input}
        placeholder="Kilograms(kg)"
        value={kilograms}
        onChangeText={handleKilogramsChange}
        keyboardType="numeric"
      />
    </View>
  );
};

export default OuncesToKgConverter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: 100,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    width: '30%',
  },
});