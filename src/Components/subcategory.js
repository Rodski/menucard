import {ProductLine} from "./productline";
import React from "react";

export function SubCategory(props) {
    const {subCategory} = props;
    return <>
        <hr/>
        <h2>{subCategory.name}</h2>
        {subCategory.note ? <div className="note">{subCategory.note}</div> : null}
        <div>{subCategory.products.map((p) =>
            <ProductLine key={p.name} product={p}/>)}</div>
    </>
}