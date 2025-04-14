import { useState } from "react";
import { databases, DB_ID, COLLECTION_ID } from "../lib/appwrite";
import Vote from "./Vote";

export default function Question({ data }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const selectedVote = formData.get("vote");

        if (selectedVote === data.answer1) {
            databases.updateDocument(DB_ID, COLLECTION_ID, data.$id, {
                vote1: data.vote1 + 1,
            });
        } else if (selectedVote === data.answer2) {
            databases.updateDocument(DB_ID, COLLECTION_ID, data.$id, {
                vote2: data.vote2 + 1,
            });
        } else if (selectedVote === data.answer3) {
            databases.updateDocument(DB_ID, COLLECTION_ID, data.$id, {
                vote3: data.vote3 + 1,
            });
        }

        setIsSubmitted(true);
    }

    if (!data) return null;

    const totalVotes = data.vote1 + data.vote2 + data.vote3;

    return (
        <>
            <h2 className="text-3xl text-center font-bold">{data.text}</h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 votes-container"
            >
                <Vote
                    text={data.answer1}
                    percentage={Math.floor((data.vote1 / totalVotes) * 100)}
                    votes={data.vote1}
                />

                <Vote
                    text={data.answer2}
                    percentage={Math.floor((data.vote2 / totalVotes) * 100)}
                    votes={data.vote2}
                />

                <Vote
                    text={data.answer3}
                    percentage={Math.floor((data.vote3 / totalVotes) * 100)}
                    votes={data.vote3}
                />

                <button
                    type="submit"
                    disabled={isSubmitted}
                    className="cursor-pointer ml-auto my-6 rounded shadow bg-green-400 text-white font-medium text-lg py-2 px-10 transition hover:bg-white hover:text-green-400 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-100"
                >
                    Submit your vote
                </button>
            </form>
        </>
    );
}