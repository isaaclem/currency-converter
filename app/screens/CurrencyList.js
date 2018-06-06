import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

class CurrencyList extends Component {
  handlePress = currency => {
    const { type } = this.props.navigation.state.params;

    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }

    this.props.navigation.goBack(null);
  }

  render() {
    let comparison = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparison = this.props.quoteCurrency;
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem 
              text={item} 
              selected={item === comparison}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor
});

export default connect(mapStateToProps)(CurrencyList);
