import React from 'react';
import {Alert} from 'react-native';
import styled from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CartQuantity} from './cart-quantity';
import {Typography} from './typography';

//
//

export const Cart: React.FC<any> = ({quantity, update}) => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{paddingBottom: Math.max(insets.bottom, 20)}}>
      <CartQuantity quantity={quantity} update={update} />
      <BuyButton
        onPress={() => Alert.alert('', 'WiP button')}
        underlayColor="white">
        <Typography color="white">Buy Now</Typography>
      </BuyButton>
    </Container>
  );
};

//
//

const Container = styled.View({
  paddingHorizontal: 25,
  paddingVertical: 8,
  backgroundColor: 'white',
  flexDirection: 'row',
  borderTopLeftRadius: 16,
  paddingTop: 16,
  borderTopRightRadius: 16,
});

const BuyButton = styled.TouchableHighlight({
  backgroundColor: '#73548F',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 1000,
  maxHeight: 51,
  flex: 2,
  alignItems: 'center',
});
