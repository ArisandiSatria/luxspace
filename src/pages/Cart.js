import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Footer from "parts/Footer";
import SiteMap from "parts/Sitemap";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetail from "parts/Cart/ShippingDetail";

export default function Homepage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetail />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </>
  );
}
