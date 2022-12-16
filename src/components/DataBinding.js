
import "./DataBinding.css";

export function DataBinding(){
   const menu = [
      {Category: "Electronics", Products:["TV","Mobile"]},
      {Category: "Footwear", Products:["Casuals", "Boot"]}
   ];
   return(
       <div className="container-fluid">
          <h2>Menu</h2>
          <ol>
            {
              menu.map(item=>
                   <li key={item.Category}>{item.Category}
                       <ul>
                          {
                             item.Products.map(product=>
                                 <li key={product}>{product}</li>
                                )
                          }
                       </ul>
                   </li>
                 )
            }
          </ol>
          <h2>Select Product</h2>
          <select>
             {
               menu.map(item=>
                  <optgroup label={item.Category} key={item.Category}>
                     {
                       item.Products.map(product=>
                           <option key={product} >{product}</option>
                          )
                     }
                  </optgroup>
                 )
             }
          </select>
       </div>
   )
}
