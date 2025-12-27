const Item = require("../model/ItemModel")

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

const getSearchedItem = async(req, res) => {
    const {q} = req.query
    try {
        let items;
        if(q) {
            items = await Item.find({name: {$regex: q, $options: 'i'}})
        }
        res.json(items)
    } catch (error) {
        res.status(500).json({message: 'No such items found!'})
    }
}

const getSingleItem = async(req, res) => {
    const {id} = req.params
    try {
        const item = await Item.findById(id)
        res.json(item)
    } catch (error) {
        res.status(500).json({message: 'No such items found!'})
    } 
}

const addItem = async (req, res) => {
  try {
    const item = new Item(req.body)
    await item.save()

    res.status(201).json({
      message: 'Recipe added successfully',
      data: item
    })
  } catch (error) {
    res.status(500).json({
      message: 'Failed to add recipe',
      error: error.message
    })
  }
}

module.exports = {
    getAllItems, 
    getSearchedItem,
    getSingleItem,
    addItem
}