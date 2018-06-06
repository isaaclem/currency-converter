import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true, textColor } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase)
                        .darken(styles.$buttonBackgroundColorModifier);

  const containerStyle = [styles.container];
  const buttonTextStyles = [styles.buttonText];

  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }
  if (editable === false) {
    containerStyle.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyle}>
      <TouchableHighlight 
        underlayColor={underlayColor} 
        style={styles.buttonContainer} 
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput 
        style={styles.input} 
        underlineColorAndroid='transparent' 
        editable={editable} 
        {...props} 
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;
