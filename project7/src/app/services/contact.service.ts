import { Injectable } from '@angular/core';
import {Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[];

  constructor() { 
    this.contacts=[
    {contactID:101,firstName:"bala",lastName:"Durga",dob:new Date("1998-12-02"),mobileNumber:"9966855362",alternateMobileNumber:"9542858743",mailId:"baladurgabala7@gmail.com",organization:"CTS"},
    {contactID:102,firstName:"bal",lastName:"olive",dob:new Date("1998-11-02"),mobileNumber:"7966855362",alternateMobileNumber:"8542858743",mailId:"baldurgabala7@gmail.com",organization:"IBM"},
    {contactID:103,firstName:"balaa",lastName:"balu",dob:new Date("1998-10-02"),mobileNumber:"9966855363",alternateMobileNumber:"9542858742",mailId:"baladurga7@gmail.com",organization:"Syntel"},
    {contactID:104,firstName:"ball",lastName:"meesala",dob:new Date("1998-09-02"),mobileNumber:"9866855362",alternateMobileNumber:"9542758743",mailId:"baladurgabal7@gmail.com",organization:"HCL"},
    {contactID:105,firstName:"baluu",lastName:"saketi",dob:new Date("1998-08-02"),mobileNumber:"9966855332",alternateMobileNumber:"9542858543",mailId:"baladurgaa7@gmail.com",organization:"TCS"}
    ];
    
  }
  getAll():Contact[]{
    return this.contacts;
  }
  get(id:number){
    return this.contacts.find((c)=>(c.contactID==id));
  }
  add(contact:Contact){
    this.contacts.push(contact);
  }
  update(contact:Contact){
    let index=this.contacts.findIndex((c)=>(c.contactID==contact.contactID));
    if(index>-1){
      this.contacts[index]=contact;
    }

  }
  delete(id:number){
    let index=this.contacts.findIndex((contact)=>(contact.contactID==id));
    if(index>-1){
      this.contacts.splice(index,1);
    }
    }
}
