import React from "react";
import classes from "./contacts.module.css"
import { ContactsMe } from "types/contacts";

const cPhone = (phone:string) => {
    const content = formatPhoneNumber(phone);

    return (
        <div className={classes.contact}>
            <h4 className={classes.contact__headers}>Телефон</h4>
            <a href={`tel:${phone}`}  className={classes.contact__body}>{content}</a>
        </div>
    )
}

const cEmail = (email:string) =>{
    return (
        <div className={classes.contact}>
            <h4 className={classes.contact__headers}>Email</h4>
            <a href={`mailto:${email}`} className={classes.contact__body}>{email}</a>
        </div>
    )
}

const cCity = (city:string) =>{
    return (
        <div className={classes.contact}>
            <h4 className={classes.contact__headers}>Город</h4>
            <p className={classes.contact__body}>Москва</p>
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