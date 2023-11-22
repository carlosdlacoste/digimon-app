
export const NavBar = () => {
    return(
        <>
            <div className="navbar bg-amber-400">
                <div className="navbar-start">
                    <span className="p-2 ml-2 text-xl shadow-xl bg-red-600 rounded-full rotate-12">DigiDex</span>
                </div>
            <div className="navbar-end gap-x-3">
                <button className="btn bg-emerald-500">Log In</button>
                <button className="btn border-emerald-500">Sign Up</button>
            </div>
            </div>
        </>
    )
}