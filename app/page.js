"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Home/header/Header";
import HeroText from "@/components/Home/hero/HeroText";
import SearchBox from "@/components/Home/hero/SearchBox";
import StatCards from "@/components/Home/statcards/StatCards";
import SliderCards from "@/components/Home/slidercards/SliderCards";
import Productcarts from "@/components/Home/productscards/ProductCards";
import Comment from "@/components/Home/comments/Comment";
import Blogs from "@/components/Home/blogsCards/Blogs";
import Footer from "@/components/Home/footer/Footer";
import { CartProvider } from "@/context/CartShop";

export default function Home(posts) {
  return (
    <CartProvider>
      <div className="font-vazirmatn">
        <div className="backgrund">
          <Header />
          <HeroText />
          <SearchBox />
          <StatCards />
        </div>
        <div className="backgrunds">
          <SliderCards />
          <div className="mx-4 backgrunds">
            <Productcarts />
          </div>
          <Comment />
          <div className="mx-4 backgrunds">
            <Blogs posts={posts} />
          </div>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}
