/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const {cart} = useSelector(state => state.CartReducer);

  const renderCartItems = () => {
    return cart.map(item => <CartItem key={item.id} item={item} />);
  };
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.map(val => {
      total += val.qtyInCart * val.productPrice;
    });
    setTotalPrice(total);
  }, [cart]);
  return (
    <View style={styles.container}>
      {renderCartItems()}
      <View style={styles.priceConatiner}>
        <Text style={styles.totalPrice}>Total Amount:</Text>
        <Text style={styles.totalPrice}>Rs. {totalPrice}/-</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
  priceConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default Cart;
