import React from "react";
import {SubCategory} from "./subcategory.js";

export function Category(props) {
    const {category} = props;
    return <>
        <hr/>
        <h2>{category.name}</h2>
        {category.note ? <div className="note">{category.note}</div> : null}
        <div>{category.subcategories.map((s) =>
            <SubCategory key={s.name} subCategory={s}/>)}</div>
    </>
}