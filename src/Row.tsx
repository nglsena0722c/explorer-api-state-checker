import React from "react";
import useGet from "./useQuery/useGet";
import Loading from "./Loading";

const Row = ({
    name,
    link,
}: {
    name: string
    link: string
}) => {
    const { data, isLoading } = useGet(link);

    return <>
        <tr className="focus:outline-none h-[240px] border border-gray-100 rounded">
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
                <div className="py-3 px-3 h-full max-h-[200px] overflow-x-hidden overflow-y-auto text-sm w-full max-w-[400px] leading-none text-black bg-white rounded whitespace-normal break-all">{JSON.stringify(data)}</div>
            </td>

        </tr>
        <tr className="h-3"></tr>
    </>

}

export default Row;