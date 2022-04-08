import { useState, useEffect } from "react";

const useForm = () => {
	const [values, setValues] = useState({
		username: "",
		password: "",
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
	};



	

	// const submitHandler = async (event) => {
	//     event.preventDefault();
	//     console.log(this.state.username);
	//     const data = this.state.username;
	//     await fetch("http://localhost:9090/assign/getApi.php",{
	//         method:'POST',
	//         headers: {
	//             'Content-Type': 'application/json'
	//           },
	//           body: JSON.stringify({data})
	//     }).then((res)=>console.log(res));

	// }

	return { handleChange, values, handleSubmit };
};

export default useForm;
