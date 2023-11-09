import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useEditUser } from "../../../../api/user-crud/useEditUser";
import { Spinner } from "@chakra-ui/react";

const EditUser = ({ user, editUserPopUp, refetchDataUser }) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [userData, setUserData] = useState({
        email: user.email,
        name: user.name,
        position: user.position,
        divisi: user.divisi,
        address: user.address,
        numberphone: user.numberphone,
    });

    //handleCloseEditUserPopUp
    const handleClosePopUp = () => {
        editUserPopUp(false)
    }
    //memanggil useMutation(editUser)
    const { mutate, isPending } = useEditUser({
        //passing userId
        userId: user._id,
        //handle success
        onSuccess: () => {
            refetchDataUser();
            editUserPopUp(false);
        },
        //handle error
        onError: (error) => {
            const validate = validateInput();
            if (validate) {
                const errorMessage = error.response.data.message;
                setErrorMsg(errorMessage);
            };
        },
    })

    //handle form
    const handleInputChange = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };
    //handle submit
    const handleSubmit = () => {
        const { email, name, address, numberphone, position, divisi } = userData
        //body useMutation
        mutate(
            {
                email,
                name,
                divisi,
                position,
                numberphone,
                address,
                password: "",
            }
        )
    };

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex items-center justify-center z-20 bg-black/5 w-full h-full">
            <div className="absolute top-1/2 transform -translate-y-1/2 bg-white p-4 w-[667px] h-[590px] rounded-lg flex flex-col ">
                <div className="flex justify-end">
                    <button
                        onClick={handleClosePopUp}
                        className="bg-black w-[41.64px] h-[41.64px] rounded-full flex flex-col items-center justify-center">
                        <Icon icon="ion:close" color="white" width="17.44" />
                    </button>
                </div>
                <div className=" flex items-center">
                    <div className="bg-gray-300 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                        <Icon icon="mingcute:user-add-fill" />
                    </div>
                    <div className="flex flex-col px-2">
                        <span className="font-semibold">Add-User</span>
                    </div>
                </div>
                <form>
                    {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
                    <div className="mt-2 flex">
                        <label
                            htmlFor="email"
                            className="mb-2 text-sm font-medium text-gray-900 absolute">
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-[#ACACAC]/50 border border-gray-300 text-black text-sm rounded-lg"
                            placeholder="name@gmail.com"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex">
                        <label
                            htmlFor="address"
                            className="mb-2 text-sm font-medium text-gray-900 absolute">
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="bg-[#ACACAC]/50 border border-gray-300 text-black text-sm rounded-lg"
                            placeholder="Adress Here"
                            value={userData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex w-full">
                        <label
                            htmlFor="phone"
                            className="mb-2 text-sm font-medium text-gray-900 absolute"
                        ></label>
                        <input
                            type="number"
                            id="phone"
                            className="bg-[#ACACAC]/50 border w-full p-3 border-gray-300 text-black text-sm rounded-lg"
                            placeholder="Number Phone"
                            value={userData.numberphone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex">
                        <label
                            htmlFor="name"
                            className="mb-2 text-sm font-medium text-gray-900 absolute"
                        ></label>
                        <input
                            type="text"
                            id="name"
                            className="bg-[#ACACAC]/50 border border-gray-300 text-black text-sm rounded-lg"
                            placeholder="User"
                            value={userData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex">
                        <label
                            htmlFor="position"
                            className="mb-2 text-sm font-medium text-gray-900 absolute"
                        ></label>
                        <input
                            type="text"
                            id="position"
                            className="bg-[#ACACAC]/50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                            placeholder="Position"
                            value={userData.position}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex">
                        <label
                            htmlFor="divisi"
                            className="mb-2 text-sm font-medium text-gray-900 absolute"
                        ></label>
                        <input
                            type="text"
                            id="divisi"
                            className="bg-[#ACACAC]/50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                            placeholder="Divisi"
                            value={userData.divisi}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="text-end flex justify-end gap-x-8 mt-20">
                        <h1
                            onClick={handleClosePopUp}
                            className="mt-[11px] font-semibold cursor-pointer"
                        >
                            Cancel
                        </h1>
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="flex items-center justify-center bg-purple w-[155px] h-[46px] rounded-lg text-white font-semibold hover:bg-purple/50">
                            {isPending ? <Spinner size={20} color="white" /> : "Add User"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;