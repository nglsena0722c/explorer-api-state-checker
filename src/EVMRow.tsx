import React from "react";
import Loading from "./Loading";
import usePost from "./useQuery/usePost";

const Row = ({
    name,
    link,
}: {
    name: string
    link: string
}) => {
    const { data, isLoading } = usePost(name, link);

    return <>
        <tr className="focus:outline-none h-16 border border-gray-100 rounded">
            <td className="">
                <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">{name}</p>
                </div>
            </td>
            <td className="">
                <div className="flex items-center pl-5">
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href={link}
                        className="text-base font-medium leading-none text-gray-700 mr-2 underline">{link}</a>
                </div>
            </td>
            <td className="pl-5">
                <div className="flex items-center">
                    <p className="text-sm leading-none text-gray-600 ml-2 text-[20px]">{
                        isLoading ? <Loading />
                            : data === "error" ?
                                <span>❌</span> : <span>✔️</span>

                    }</p>
                </div>
            </td>

            <td className="px-5">
                <div className="py-3 px-3 text-sm w-full max-w-[400px] leading-none text-black bg-white rounded text-ellipsis overflow-hidden">{JSON.stringify(data)}</div>
            </td>

        </tr>
        <tr className="h-3"></tr>
    </>

}

export default Row;