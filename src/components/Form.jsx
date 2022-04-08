const Form = () => {


    return (
        <>
        <h1>Please LogIn</h1>
        <form action="" className="container">
            <div className="mb-3">
            <label for="name" className="form-label"></label>
            <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
            <label for="password" className="form-label"></label>
            <input type="text" className="form-control"></input>
            </div>
            <button className="btn btn-primary">Login</button>
        </form>
        </>
    )
}

export default Form