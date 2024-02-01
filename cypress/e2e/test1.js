///<reference types="cypress"/>
describe("Automation test store",()=>{
it("test1",()=>{
cy.visit("https://automationteststore.com/")
//to get element in many way
//methode 1
//cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg']").click()

//methode 2
//cy.get('a[title="Flash Bronzer Body Gel"]').click()

//methode3
cy.get('.header_block > .social_icons > .facebook').click()




})

})