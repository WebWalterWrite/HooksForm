import axios from 'axios';

  /**
   * @desc - Insére en BDD le formulaire, renvoi un objet avec message erreurs ou succès
   * @func fetchForm - insert en base de données le formulaire
   * @param {object} data - Contient les données du formulaire
   * @param {object} newUser - la réponse du serveur
   */

export const fetchForm = async (data) => {
    // fetch en bdd
    const dataUser = await axios.post("http://localhost:4000/user/create", data);

    if (dataUser) {
        const { errors } = dataUser.data;
        return errors;
    }
}