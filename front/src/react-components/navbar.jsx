import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
        <>
            <div className="navbar bg-amber-400">
                <div className="navbar-start">
                    <Link to="/" className="rotate-12">
                        <span className="p-2 ml-2 text-xl shadow-xl bg-red-600 rounded-full">DigiDex</span>
                    </Link>
                </div>
            <div className="navbar-end gap-x-3">
                <Link to="/login">
                    <button className="btn bg-emerald-500">Log In</button>
                </Link>
                <Link to="/signup">
                    <button className="btn border-emerald-500">Sign Up</button>
                </Link>
            </div>
            </div>
        </>
    )
}