import { connect } from "react-redux"
import { deleteContact, contactFetch } from "../../redux/contacts/contacts-operations"
import ContactList from "./ContactList"

const getFilteredContacts = (contacts, filter) => {
    if (!filter) return contacts
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
}

const mapStateToProps = (state) => {
    const { items, filter } = state.contacts

    const filteredContacts = getFilteredContacts(items, filter)
    return {
        contacts: filteredContacts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => dispatch(deleteContact(id)),
        onContactFetch: () => dispatch(contactFetch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
