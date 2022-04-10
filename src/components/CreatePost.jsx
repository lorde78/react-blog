import { useState } from "react";
import useForm from "../hook/useForm";

const CreatePost = () => {

    const { handleChange, values, handleSubmit} = useForm();

	return (
		<>
			<h1>Create a post</h1>
			<form action="" className="container" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label"></label>
					<input
						type="text"
                        name="title"
						className="form-control"
						value={values.title}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="content" className="form-label"></label>
					<input
						type="text"
                        name="content"
						className="form-control"
						value={values.content}
						onChange={handleChange}
					></input>
				</div>
				<button type="submit"className="btn btn-primary">Send</button>
			</form>
		</>
	);
};

export default CreatePost;
