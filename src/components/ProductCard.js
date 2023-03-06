import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ProductCard = ({
  navigation,
  productId,
  productImage,
  productName,
  price,
}) => {
  const onPressHandler = () => {
    navigation.navigate('Productdetailpage', {
      id: productId,
      image: `${productImage}`,
      name: `${productName}`,
      productPrice: `${price}`,
    });
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPressHandler}>
      <Image source={{uri: productImage}} style={styles.image} />
      <View style={styles.divider} />
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.price}>Rs. {price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: '45%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  divider: {
    margin: 10,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    height: '60%',
    width: '100%',
    resizeMode: 'cover',
  },
  productName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    color: 'purple',
    fontSize: 18,
  },
  price: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default ProductCard;
