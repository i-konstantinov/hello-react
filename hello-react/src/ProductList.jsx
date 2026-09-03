import { Product } from "./Product";

export const ProductList = ({ products }) => {
    const items = products.map(({ id, ...info }) => {
        return (
            <div key={id}>
                <h3>ID: #{id}</h3>
                <Product {...info} />
            </div>
        )
    });
    return <div className="card">
        <h2 className="highlight">Our products</h2>
        {items}
    </div>;
}