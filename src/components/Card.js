import React from "react";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;

    if (objs[i] !== undefined) {
      const {
        barcode,
        itemId,
        name,
        brandName,
        mainImageSrc,
        allergens,
        ingredients,
        nutritionValues,
        url,
      } = objs[i];

      return (
        <animated.div
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <div className="card">
              <Carousel>
                <img src={mainImageSrc} alt="profilePicture" />
              </Carousel>
              <h2>{name.split(",")[0].replace(",\n", "") + "\n"}</h2>
              <h2>{brandName}</h2>
              <h5>{}</h5>
              <h5>{}</h5>
            </div>
          </animated.div>
        </animated.div>
      );
    }
  }
}

export default Card;
