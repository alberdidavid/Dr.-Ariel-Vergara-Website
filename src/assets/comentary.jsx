const Comentary = () => {
    return (
        <div className="flex flex-row items-start">
            <img className="mx-4" src="https://i.postimg.cc/3rdsVRMv/profile.png" alt=""/>
            <div className="flex flex-col">
                <h1 className="text-black font-sans font-bold text-lg">Juan Perez</h1>
                <h4 className="text-black font-sans text-sm">Paciente</h4>
                <img className="max-w-[28px] max-h-[28px] my-2" src="https://i.postimg.cc/PxhqKwVY/open.png" alt="" />
                <p className="text-sm text-gray-950">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    )
} 

export default Comentary;