import { FiSearch } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useAuthInfo } from '../../use context/useAuthInfo';
export function Navbar() {
    const pageTitles = {
        '/dashboard': 'Dashboard',
        '/attendance-overview': 'Attendance Overview',
        '/permission-and-leave': 'Attendance Permission & Leave',
        '/employee-data': 'Employee',
        '/attendance-history': 'History',
        '/wiki-document': 'Wiki Document',
        '/request': 'Request',
    };

    // Mengambil judul berdasarkan lokasi saat ini
    const currentPageTitle = pageTitles[location.pathname] || '';
    const { userData } = useAuthInfo()
    return (
        <nav className="fixed z-10 top-6 right-7 w-[89%] h-[75px] flex items-center justify-between bg-white p-6 shadow-lg rounded-lg backdrop-blur-md">                <div>
            <span className="navtitle text-xl font-semibold text-primary">{currentPageTitle}</span>
        </div>
            <div className="relative flex items-center gap-x-6">
                <div>
                    <input
                        type="text"
                        id="search"
                        placeholder="Quick Search..."
                        className="w-64 h-10 pl-10 bg-gray-100 text-sm placeholder:text-grey rounded"
                    />
                </div>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch color='#9295AB' size={18} />
                </div>
                <div>
                    <IoMdNotificationsOutline color='primary' size={30} />
                </div>
                <div className='border-l-2 flex items-center px-5 gap-4'>
                    <div>
                        <img src="/src/assets/image1584.png" alt="" className='w-10 h-10 rounded-full' />
                    </div>
                    <div className='flex flex-col text-sm'>
                        <p>{userData?.role}</p>
                        <p>{userData?.email}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
} 