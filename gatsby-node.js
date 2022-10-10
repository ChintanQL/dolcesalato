const path = require(`path`)
const chunk = require(`lodash/chunk`)
const slash = require('slash');
const axios = require('axios');

const getData = async () => {
  var a =  axios({
		url: 'http://dolcesalato.steamlinedesign.com/wp-json/ds/v1/products_category',
		method: 'get',
	});
	console.log(a);
	return a;
};  
 
exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	let Data = await getData();
	
	await Promise.all(Data.data.ResponseData.cat.map(async (value) => {
    
	var page = require.resolve(`./src/templates/category_details.js`);	
	var pathurl = `product-category/${value.slug}`;
	createPage({
		path: pathurl,
		component: page,
		context: {
			Data: value,
		}
	});
  }));
  
	var pag = require.resolve(`./src/templates/our_product.js`);	
	var pathur = `product-category`;
	createPage({
		path: pathur,
		component: pag,
		context: {
			Data: Data.data.ResponseData.category_list,
		}
	});
  
	
} 
 
 






