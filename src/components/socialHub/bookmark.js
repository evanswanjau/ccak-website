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

        setMember({ ...member, bookmarks: newBookmarks });

        updateMember({ ...member, bookmarks: newBookmarks }, setMember).then(
            () => {
                enqueueSnackbar(`Post ${action}ed to bookmarks`, {
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
