import {ProductLine} from "./productline";
import React from "react";

export function Category(props) {
    const {category} = props;
    return <>
        <hr/>
        <h2>{category.name}</h2>
        {category.note ? <div className="note">{category.note}</div> : null}
        <div>{category.products.map((p) =>
            <ProductLine key={p.name} product={p}/>)}</div>
    </>
}