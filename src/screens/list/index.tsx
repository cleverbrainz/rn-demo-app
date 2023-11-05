import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductsAction} from '../../store/product/actions';
import {productSelector} from '../../store/product/selector';
import {ListItem} from './components/item';

//
//

type ProductProps = {
  page: number;
};

const ListScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector(productSelector);
  const [page, setPage] = React.useState(1);

  const fetchProducts = React.useCallback(
    (productProps: ProductProps) => dispatch(fetchProductsAction(productProps)),
    [dispatch],
  );

  const onRefresh = React.useCallback(() => {
    setPage(1);
  }, []);

  React.useEffect(() => {
    console.log('page====>', page);
    fetchProducts({page});
  }, [fetchProducts, page]);

  const onScroll = ({nativeEvent}: any) => {
    if (
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - 5
    ) {
      setPage(state => state + 1);
    }
  };

  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={true}
        onScroll={onScroll}
        scrollEventThrottle={1000}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
            colors={['#000000']}
            tintColor="#FFFFFF"
          />
        }>
        {product &&
          product.items.map(item => <ListItem key={item.id} item={item} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;
