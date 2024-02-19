import { useSnackbar } from "notistack";
import { BookmarkIcon as BookmarkIconOutline } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { updateMember } from "../../api/member-api-calls";

export const BookMark = ({ member, setMember, id }) => {
    const { enqueueSnackbar } = useSnackbar();

    const updateBookmarks = (action) => {
        let newBookmarks = [...member.bookmarks];

        if (action === "add") {
            newBookmarks.push(id);
        }

        if (action === "remove") {
            newBookmarks = newBookmarks.filter((likeId) => likeId !== id);
        }

        const message =
            action === "add"
                ? "Post added to bookmarks"
                : "Post removed from bookmarks";

        setMember({ ...member, bookmarks: newBookmarks });

        updateMember({ ...member, bookmarks: newBookmarks }, setMember).then(
            () => {
                enqueueSnackbar(message, {
                    variant: "success",
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "bottom",
                    },
                });
            }
        );
    };

    if (member.bookmarks.includes(id)) {
        return (
            <BookmarkIconSolid
                className="w-6 text-black cursor-pointer"
                onClick={() => {
                    updateBookmarks("remove");
                }}
            />
        );
    } else {
        return (
            <BookmarkIconOutline
                className="w-6 text-black cursor-pointer"
                onClick={() => {
                    updateBookmarks("add");
                }}
            />
        );
    }
};
