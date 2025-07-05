// ** Components
// import { Button, Input } from "@headlessui/react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
// ** Data
import { categories, colors, formInputsList, ProductList } from "./data";
// ** Hooks
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/UI/CircleColor";

import { v4 as uuid } from "uuid";
import Select from "./components/UI/Select";
import { ProductName } from "./types";

export default function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // ** State
  // ** To add new product
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] = useState<IProduct | null>(
    defaultProductObj
  );
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [temColor, setTemColor] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // ** Handler
  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };
  const openEditModel = () => {
    setIsOpenEditModal(true);
  };
  const closeEditModel = () => {
    setIsOpenEditModal(false);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    // ** Set Product
    setProduct({
      ...product,
      [name]: value,
    });
    // ** Clear Error for UX
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    // ** Set Product
    setProductToEdit((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]: value,
      };
    });
    // ** Clear Error for UX
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const onCancel = () => {
    // ** Clear
    console.log("cancel");
    setProduct(defaultProductObj);
    closeModel();
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    // ** check if any property has a value of "" && check if all properties have a value of ""
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuid(), colors: temColor, category: selectedCategory },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTemColor([]);
    closeModel();
    console.log("Send Success");
  };

  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!productToEdit) return;
    const { title, description, imageURL, price } = productToEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    // ** check if any property has a value of "" && check if all properties have a value of ""
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      { ...product, id: uuid(), colors: temColor, category: selectedCategory },
      ...prev,
    ]);
    setProductToEdit(defaultProductObj);
    setTemColor([]);
    closeModel();
    console.log("Send Success");
  };

  // ** Renders
  const renderProductList = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        setProductToEdit={setProductToEdit}
        setIsOpenEditModal={setIsOpenEditModal}
      />
    );
  });

  const renderFormInputList = formInputsList.map((input) => {
    return (
      <div className="flex flex-col" key={input.id}>
        <label
          htmlFor={input.id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {input.lable}
        </label>
        <Input
          type="text"
          id={input.id}
          name={input.name}
          value={product[input.name]}
          onChange={onChangeHandler}
        />
        <ErrorMessage msg={errors[input.name]} />
      </div>
    );
  });

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (temColor.includes(color)) {
          setTemColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTemColor((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: keyof IProduct
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit ? (productToEdit[name] as string) : ""}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name as keyof typeof errors]} />
      </div>
    );
  };

  return (
    <main className="container mx-auto sm:p-8 lg:p-16 xl:p-24 2xl:p-28">
      <Button
        className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white"
        onClick={openModel}
      >
        ADD
      </Button>

      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
        {renderProductList}
      </div>

      {/* Add Product ModAl */}
      <Modal isOpen={isOpen} closeModal={closeModel} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center my-5 flex-wrap space-x-1">
            {renderProductColors}
          </div>
          <div className="flex items-center my-5 flex-wrap space-x-1">
            {temColor.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white cursor-pointer"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white">
              Submit
            </Button>
            <Button
              className="bg-red-400 hover:bg-red-500 p-4 w-full rounded-md text-white"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Product ModAl */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModel}
        title="EDIT THIS PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product ImageURL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          {/* {renderFormInputList}
            <Select selected={selectedCategory} setSelected={setSelectedCategory} />
            <div className="flex items-center my-5 flex-wrap space-x-1">
              {renderProductColors}
            </div>
            <div className="flex items-center my-5 flex-wrap space-x-1">
              {temColor.map(color => (
                <span 
                  key={color} 
                  className= 'p-1 mr-1 mb-1 text-xs rounded-md text-white cursor-pointer'
                  style={{backgroundColor: color}}
                >
                  {color}
                </span>
              ))}
            </div> */}

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white">
              Submit
            </Button>
            <Button
              className="bg-red-400 hover:bg-red-500 p-4 w-full rounded-md text-white"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}
