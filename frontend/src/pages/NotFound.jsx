import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center py-56">
            <h1 className="text-3xl">Oops! You seem to be lost.</h1>
            <br />
            <p className="text-xl">Here are some helpful links:</p>
            <Link to='/' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Home</Link>
            <Link to='/about' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">About</Link>
            <Link to='/courses' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Explore Courses</Link>
        </div>
    )
}

export default NotFound;