import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useQuery } from "react-apollo";
import getProductInfo from '../../graphql/getProductInfo.graphql';
import './styles.css';

const CSS_HANDLES = [
  'productInfo__container'
];

export default function ProductInfo({
  productSku,
  videoSrc
}: ProductInfoProps) {
  videoSrc

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //QUERY
  const { data, loading } = useQuery(getProductInfo, {
    variables: {skuId: productSku}
  });

  console.log('data', data);

  //JSX
  if(loading) {
    return null
  }

  return (
    <div className={handles.productInfo__container}>

    </div>
  )
}

