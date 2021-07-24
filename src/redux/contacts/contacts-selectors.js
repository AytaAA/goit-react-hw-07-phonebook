const getItems = (state) => state.contacts.items
const getFilter = (state) => state.contacts.filter

const contactSelectors = {
    getItems,
    getFilter,
}

export default contactSelectors
