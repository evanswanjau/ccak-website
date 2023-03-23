export const HamburgerMenu = ({ setMobile }) => {
    return (
        <div className="w-full flex justify-between items-center py-2 px-6 bg-white shadow-sm">
            <a href="/">
                <img
                    className="w-32"
                    src="/ccak_side_logo.png"
                    alt="CCAK Logo"
                />
            </a>
            <div
                className="flex flex-col space-y-1 cursor-pointer"
                onClick={() => {
                    setMobile(true);
                }}
            >
                {[1, 2, 3].map((item) => {
                    return (
                        <span
                            key={item}
                            className="w-7 border-2 border-black rounded-sm"
                        ></span>
                    );
                })}
            </div>
        </div>
    );
};
