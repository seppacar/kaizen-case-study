import React, { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import CTAButton from "./CTAButton";
import Hero from "./Hero";
import TextArea from "./TextArea";

const App = () => {
  // API Call may seperate later, fetchin promotion id 33
  const [items, setItems] = useState([]);
  useEffect(() => {
    //Setting promotion id to 33
    const promotionId = "33";
    const headers = {
      "Content-Type": "application/json",
      "X-Country-Id": "TR",
      "X-Language-Id": "TR",
    };
    //Fetch details for promotion, shows placeholder information if catches error
    fetch("https://api.extrazone.com/promotions?Id=" + promotionId, { headers })
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        let data = {
          ImageUrl: "/placeholder_image.png",
          BrandIconUrl: "/placeholder_icon.png",
          RemainingText: "son 12 gün",
          Description:
            "Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.  Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola, geleneksel lezzetine modern bir yorum katarak raflarda yer alır. Yeni tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok yankı uyandıran kola edisyonları arasında yer almaktadır. İçeceğin soğuk tüketilmesi önerilir. Buzla beraber içilebilir. Özellikle sıcak yaz günlerinde ferahlatıcı etki gösterir.",
          Title: "Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi",
        };
        setItems(data);
      });
  }, []);
  //

  return (
    <section className="FlexContainer">
      <Hero
        splash={items.ImageUrl}
        brandimg={items.BrandIconUrl}
        countdown={items.RemainingText}
      ></Hero>
      <TextArea description={items.Description} title={items.Title}></TextArea>
      <div className="Gradient"></div>
      <CTAButton text="Hemen Katıl"></CTAButton>
    </section>
  );
};

export default App;
