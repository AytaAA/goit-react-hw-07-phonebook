import React from "react"
import style from "./ContactItem.module.css"
//import { deleteContact } from "../../redux/contacts/contacts-operations"

const ContactItem = ({ id, name, number, deleteContact }) => (
    <li key={id} className={style.list_item}>
        <span className={style.new_item}>
            {name}: {number}
        </span>
        <button className={style.delete_btn} onClick={() => deleteContact(id)}>
            Delete
        </button>
    </li>
)

export default ContactItem
