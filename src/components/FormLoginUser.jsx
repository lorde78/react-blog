import { useState } from "react";
import useForm from "../hook/useForm";

const FormLoginUser = () => {

    const { handleChange, values, handleSubmit, userLogged, handleLogin, handleDeconnexion} = useForm();

	return (
		<>
			<h1>Please Login</h1>
			<form action="" className="container" onSubmit={handleLogin}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label"></label>
					<input
						type="text"
                        name="username"
						className="form-control"
						value={values.username}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label"></label>
					<input
						type="text"
                        name="password"
						className="form-control"
						value={values.password}
						onChange={handleChange}
					></input>
				</div>
				<button type="submit"className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-danger" onClick={handleDeconnexion}>Deconnexion</button>
			</form>
		</>
	);
};

export default FormLoginUser;
