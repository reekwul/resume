import React from "react";
import classes from "./contacts.module.css"
import { ContactsMe } from "types/contacts";

const cPhone = (phone:string) => {
    const content = formatPhoneNumber(phone);

    return (
        <div >
            <h3 className={classes.headers}>Телефон</h3>
            <a href={`tel:${phone}`}  className={classes.bodty}>{content}</a>
        </div>
    )
}

const cEmail = (email:string) =>{
    return (
        <div >
            <h3 className={classes.headers}>Email</h3>
            <a href={`mailto:${email}`} className={classes.body}>{email}</a>
        </div>
    )
}

const cCity = (city:string) =>{
    return (
        <div >
            <h3 className={classes.headers}>Город</h3>
            <p className={classes.telo}>Москва</p>
        </div>
    )
}


const Contacts = (props:Partial<ContactsMe>) => {
    const  {city,email,phone} = props

    return (
        <>
            { city ? 
                cCity(city)
                : ''
            }
            { phone ? 
                cPhone(phone)
                : ''
            }
            { email ? 
                cEmail(email)
                : ''
            }
        </>
    );
}


function formatPhoneNumber(phone: string): string {
  // Проверяем, что номер начинается с +7 и имеет правильную длину
  if (!phone.startsWith('+7') || phone.length !== 12) {
    return phone; // или можно выбросить ошибку
  }

  // Разбиваем номер на части и форматируем
  const countryCode = phone.substring(0, 2); // +7
  const firstPart = phone.substring(2, 5); // 999
  const secondPart = phone.substring(5, 8); // 999
  const thirdPart = phone.substring(8, 10); // 99
  const fourthPart = phone.substring(10, 12); // 99

  return `${countryCode}(${firstPart})-${secondPart}-${thirdPart}-${fourthPart}`;
}

export default Contacts