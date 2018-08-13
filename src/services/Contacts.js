import axios from 'axios'

export default class Contacts {
  constructor () {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll () {
    return axios.get('contacts')
  }
  
  add(contact) {
    return axios.post('contacts', contact);
  }

  delete(id) {
    return axios.delete(`contacts/${id}`);  // 'contacts/' + id
  }

  get(id) {
    return axios.get(`contacts/${id}`);
  }

  edit(contact) {
    return axios.put(`contacts/${contact.id}`, contact);
  }
}

export const contacts = new Contacts()
