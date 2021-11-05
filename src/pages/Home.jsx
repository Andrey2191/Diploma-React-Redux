// import React from "react";
// import { Categories, SortPopup, PizzaCard } from "../components/index";

// export default function Home({ items }) {
//   return (
//     <div className="container">
//       <div className="content__top">
//         <Categories
//           onClick={(name) => console.log(name)}
//           items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
//         />
//         <SortPopup items={["популярность", "цена", "алфавит"]} />
//       </div>
//       <h2 className="content__title">Все пиццы</h2>
//       <div className="content__items">
//         {items.map((obj) => (
//           <PizzaCard key={obj.id} {...obj} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Categories, SortPopup, PizzaCard } from "../components/index";

export default function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          items={[
            { name: "популярность", type: "popular" },
            { name: "цена", type: "price" },
            { name: "алфавит", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaCard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}
