import React from "react";

export function ProductLine(props) {
    const {product} = props;
    return <div className={"productLine"}>
        <div>{product.name}{product.size ? <span className="productSize">*{product.size}cl</span> : null}
            <div className={"note"}>
                {product.note ? <div className="productNote">{product.note}</div> : null}
            </div>
        </div>
        <div>{product.price}&euro;</div>
    </div>;
}