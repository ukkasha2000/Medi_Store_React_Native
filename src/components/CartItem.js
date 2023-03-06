/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../redux/actions';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const increaseFunc = id => {
    dispatch(increaseQuantity(id));
  };
  const decreaseFunc = id => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <View style={styles.cartItemsContainer}>
      <View style={styles.cartImgContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.cartDetailsContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.price}>Rs. {item.productPrice}</Text>
      </View>
      <View style={styles.cartButtonsContainer}>
        <TouchableOpacity
          style={styles.plusMinusButton}
          onPress={() => decreaseFunc(item.id)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.qtyInCart}</Text>
        <TouchableOpacity
          style={styles.plusMinusButton}
          onPress={() => increaseFunc(item.id)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemsContainer: {
    height: 70,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  cartImgContainer: {
    width: '20%',
    height: '100%',
  },
  cartDetailsContainer: {
    width: '40%',
    height: '100%',
    paddingLeft: 15,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  cartButtonsContainer: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinusButton: {
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quantityText: {
    color: 'black',
    fontWeight: '600',
  },
});

export default CartItem;
