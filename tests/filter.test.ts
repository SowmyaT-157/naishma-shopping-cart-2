import{Product} from "../src/interface/productData"
import{filterCategory, filterPrice, filterRating} from "../src/customer/filterProduct/filter"
describe("using mmock spyon",()=>{
    const products:Product[] =[
     {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"category":"men's clothing","rating":{"rate":3.9,"count":120}},
     {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"category":"men's clothing","rating":{"rate":4.1,"count":259}},
     {"id":3,"title":"Mens Cotton Jacket","price":55.99,"category":"electrical","rating":{"rate":4.7,"count":500}},
     {"id":3,"title":"cosmotics","price":206} //here wantedly removed the category because to write test case for the optional toLowercase category is intiakizing but not assigning a value so it will be undefined.
    ]
    it("Should filter the based omn this price",()=>{
       const input = 22.3
       const data = filterPrice(products,input)
       expect(data).toEqual([ 
        {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"category":"men's clothing","rating":{"rate":4.1,"count":259}},
       ])
    })
    it("Should filter based on the category",()=>{
        const input = "men's clothing"
        const data = filterCategory(products,input)
        expect(data).toEqual([{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"category":"men's clothing","rating":{"rate":3.9,"count":120}},
     {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"category":"men's clothing","rating":{"rate":4.1,"count":259}}])
    })
    it("Should filter based on the rating",()=>{
        const input = 4.7
        const data = filterRating(products,input)
        expect(data).toEqual([{"id":3,"title":"Mens Cotton Jacket","price":55.99,"category":"electrical","rating":{"rate":4.7,"count":500}}])
    })
    it("Should return empty array if any category is not matched",()=>{
        const input = "food"
        const data = filterCategory(products,input)
        expect(data).toEqual([])
    })
    it("Should return empty if price is above the min ",()=>{
        const input = 5
        const data = filterPrice(products,input)
        expect(data).toEqual([])
    })
    it("Should return a length if the product price lessthan or equal to the max price",()=>{
        const input = 200
        const data = filterPrice(products,input)
        expect(data).toHaveLength(3)
    })
    it("Should return empty array if input give an empty string category",()=>{
        const input = " "
        const data = filterCategory(products,input)
        expect(data).toEqual([])
    })
    

})