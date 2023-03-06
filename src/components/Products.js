import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from './ProductCard';

const Products = ({navigation}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://92bcb510-f519-4ef7-a4cd-d985fa0c306d.mock.pstmn.io/medicine',
      )
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductCard
            productId={item.id}
            productImage={item.image}
            productName={item.name}
            price={item.price}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Products;
