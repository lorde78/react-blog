import { useState, useEffect } from "react";

const useForm = () => {

	const [postList,  setpostList] = useState ({
		title: "",
		content:""
	});

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
	
	return { handleChange, values, handleSubmit };
};

export default useForm;
