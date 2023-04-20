export const MovieCard = ({ id, title, description, image, rating }) => {
    return (
        <div className="card bg-base-300 shadow-xl p-2 mx-10 sm:mx-0 flex flex-grow flex-1 max-h-96">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="rounded-md object-cover w-full h-64"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title min-h-[50px]">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center mt-2">
                    <button className="btn btn-secondary">Edit</button>
                </div>
            </div>
        </div>
    );
};
