import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'


export const getStaticProps = async () => {
  const response = await fetch ('https://platzi-nextjs-anb5.vercel.app/api/avo')
  const {data:productlist} : TAPIAvoResponse = await response.json()

  return {
    props: {
      productlist
    }
  }
}

const HomePage = ({productList}: {productList:TProduct[]}) => {


  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
