import React, { useState } from "react";
import { useInputValue } from '../common/useState';
import { fetchForm } from "../../utils/api";

export const userPwdForgot = () => {

    const [msg, setMsg] = useState({});

    const onSubmit = e => {
        e.preventDefault();
        const data = new FormData (e.target);

        let userEmail = data.get('email'); 

        getEmail (userEmail);
    }

    const getEmail = async data => {

        const result  = await fetchForm(data)
        setMsg(result)
    }
};