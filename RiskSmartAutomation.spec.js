const {test,expect} = require('@playwright/test');


test("AddProducttoCart", async({page})=>
{ 
await page.goto("https://www.demoblaze.com/");
await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'MacBook air' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  const bool = page.getByRole('cell', { name: 'MacBook air' }).isVisible();
  expect(bool).toBeTruthy();

  const bool1 = page.getByRole('cell', { name: '700' }).isVisible();
  expect(bool1).toBeTruthy();

 const totalPrice = await page.locator('#totalp').allTextContents();
 console.log(totalPrice);
}
)


test("SendMessage", async({page})=>
{
await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.locator('#recipient-email').fill('test@gmail.com');
  await page.getByLabel('Contact Email:').fill('test');
  await page.getByLabel('Message:').fill('test message');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
})


test("SearchProduct", async({page})=>
{
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.locator('#search').fill('jacket');
  await page.locator('#search').press('Enter');
  console.log(await page.locator('.base').allTextContents());
  const Productname = 'Adrienne Trek Jacket';
  expect(Productname).toBe('Adrienne Trek Jacket');
  await page.locator('.logo').click();
  await page.locator('#search').fill('jaket');
  await page.locator('#search').press('Enter');
  console.log(await page.getByText('Your search returned no').allTextContents());

})