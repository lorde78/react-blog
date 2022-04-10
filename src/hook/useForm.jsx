import { useState, useEffect } from "react";

const useForm = () => {

	const [ userLogged, setUserLogged] = useState([])

	const [values, setValues] = useState({
		username: "",
		password: "",
		title: "",
		content:""
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = values;
		await fetch("http://localhost:5555/adduser.php", {
			method: "POST",
			mode: "cors",
			credentials: 'include',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': `Basic ${btoa(`${data?.username}:${data?.password}`)}`,
			},
			body: JSON.stringify(data),
		})
			.then((resp) => resp.json())
			.then((respJSON) => console.log(respJSON));
	}
	
	const handleLogin = async (e) => {
        e.preventDefault()
        const data = values;
        await fetch('http://localhost:5555/getuser.php', {
            method: 'GET',
            mode: 'cors',
        })
            .then(resp => resp.json())
            .then(respJSON => {
                setUserLogged(respJSON.filter(user => user.username === data.username && user.password === data.password));
            })
            .catch((error) => {
                console.error(error);
            });
    }

	const handleDeconnexion = async (e) => {
        setUserLogged();
    }

	return { handleChange, values, handleSubmit, handleLogin, handleDeconnexion };
};

export default useForm;
