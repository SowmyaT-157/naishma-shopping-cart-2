import { Product } from "../src/interface/productData"
import{searchProducts} from "../src/customer/searchProduct/searchProducts"
describe("search a product",()=>{
    const products:Product[]=[
     {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"category":"men's clothing","rating":{"rate":3.9,"count":120}},
     {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"category":"men's clothing","rating":{"rate":4.1,"count":259}},
     {"id":3,"title":"Mens Cotton Jacket","price":55.99,"category":"electrical","rating":{"rate":4.7,"count":500}},
    ]
    it("Should return a user searched product",()=>{
       const input = "Mens"
       const data = searchProducts(products,input)
       expect(data).toEqual([
        {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"category":"men's clothing","rating":{"rate":4.1,"count":259}},
        {"id":3,"title":"Mens Cotton Jacket","price":55.99,"category":"electrical","rating":{"rate":4.7,"count":500}}
        ])
    })
})