import React, { Component } from "react"
//data

//components
import Filter from "../src/Components/Filter"
import Container from "../src/Components/Container"
import ContactForm from "../src/Components/ContactForm"
import ContactList from "../src/Components/ContactList/ContactList.container"

class App extends Component {
    state = {
        contacts: [],
        name: "",
        filter: "",
    }
    render() {
        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm />
                <h1>Contacts</h1>
                <Filter />
                <ContactList />
            </Container>
        )
    }
}

export default App
