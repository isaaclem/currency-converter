import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Icon = ({ checkmark, visible }) => {
  const iconStyles = [styles.icon];

  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  return (
    <View style={iconStyles}>
      {checkmark 
        ? 
          <Image 
            resizeMode="contain" 
            style={styles.checkIcon} 
            resizeMode="contain" 
            source={require('./images/check.png')} 
          /> 
        : null}
    </View>
  );
};

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool
};

export default Icon;
