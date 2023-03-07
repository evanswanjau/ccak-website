export const News = ({ data: { title, published, excerpt, image, url } }) => {
    return (
        <a href={`/media-centre/news/${url}`} className="group">
            <div
                className={`bg-[url('${image}')] bg-cover bg-center bg-no-repeat rounded-lg text-white h-40`}
            ></div>
            <p className="py-2 text-gray-400">{published}</p>
            <h3 className="text-xl text-black group-hover:text-[#329E49] transition duration-300 ease-in-out">
                {title}
            </h3>
            <p>{excerpt}</p>
        </a>
    );
};
