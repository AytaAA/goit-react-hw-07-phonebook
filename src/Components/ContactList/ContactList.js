import { useEffect } from "react"
import style from "./ContactList.module.css"
import ContactItem from "../ContactItem"

const ContactList = ({ contacts, deleteContact, onContactFetch }) => {
    useEffect(() => {
        onContactFetch()
    }, [onContactFetch])
    return (
        <ul className={style.contact_list}>
            {contacts.map(({ id, name, number }) => (
                <ContactItem id={id} key={id} name={name} number={number} deleteContact={deleteContact} />
            ))}
        </ul>
    )
}

export default ContactList
