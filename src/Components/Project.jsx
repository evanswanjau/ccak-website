export const Project = ({ data: { title, description, image, link } }) => {
    return (
        <a
            href={`/projects/${link}`}
            className={`bg-[url('${image}')] bg-cover bg-center bg-no-repeat rounded-lg text-white`}
        >
            <div className="h-full w-full backdrop-brightness-50 pt-32 p-5 rounded-lg">
                <h3 className="text-xl my-3">{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    );
};
