/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {productDetailStyles as styles} from './styles';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/actions';

const ProductDetailPage = ({route}) => {
  const dispatch = useDispatch();
  const {id, image, name, productPrice} = route.params;
  const addItem = () => {
    dispatch(addToCart({id, image, name, productPrice}));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.title}>Rs. {productPrice}</Text>
      </View>
      {/* <View style={styles.middleContainer}>
        <Text style={styles.middleContainerText}>Quantity: </Text>
        <View style={styles.middleContainerRight}>
          <TouchableOpacity
            style={styles.plusMinusButton}
            onPress={() => console.log('-')}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>1</Text>
          <TouchableOpacity style={styles.plusMinusButton} onPress={addItem}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => console.log('Buy now pressed')}>
          <Text style={styles.button1Text}>Buy now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={addItem}>
          <Text style={styles.button2Text}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailPage;
