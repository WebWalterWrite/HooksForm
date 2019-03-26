import axios from 'axios';

  /**
   * @desc - Insére en BDD le formulaire, renvoi un objet avec message erreurs ou succès
   * @func fetchForm - insert en base de données le formulaire
   * @param {object} data - Contient les données du formulaire
   * @param {object} newUser - la réponse du serveur
   */

export const fetchForm = async (data, route) => {
    const url = "http://localhost:4000/"
    let dataUser;
    switch (route) {
        case 'create':
            dataUser = await axios.post(`${url}user/create`, data);
            break;
        case 'forgot':
            dataUser = await axios.post(`${url}user/password/forgot`, data);
            break;
        default:
            break;
        case 'reset':
            dataUser = await axios.put(`${url}user/password/new-password`, data);
            break;
    }
    // fetch en bdd
    if (dataUser) {
        const { msg } = dataUser.data;
        return msg;
    }
}