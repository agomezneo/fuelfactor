import React from 'react'
import styles from '@/styles/principal_product_section.module.scss'
import ProductCard from '../cards/ProductCard'
import { useProducts } from '@/context/ProductsContext';

function PrincipalProductSection() {

    const { principalProduct } = useProducts();
  return (
    <div className={styles.princiapal_product_section}>
        <div className={styles.princiapal_product_container}>
            <div>
                {principalProduct && <ProductCard product={principalProduct} principal={true} />}
            </div>
        </div>
    </div>
  )
}

export default PrincipalProductSection
