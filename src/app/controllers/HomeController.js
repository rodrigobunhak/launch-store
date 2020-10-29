const { formatPrice, date } = require('../../lib/utils')

const File = require('../models/File')
const Product = require('../models/Product')

module.exports = {
  async index() {
    let results = await Product.all()
    const products = results.rows

    if (!products) return res.send("Products not found!")
  }
}