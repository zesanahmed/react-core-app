import SingleProduct from "./SingleProduct";

const Products = () => {
    return (
        <div>
            <h1 className="my-6"> Ours Products </h1>
            <div className="flex gap-4 mx-4">
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            </div>
        </div>
    );
};

export default Products;