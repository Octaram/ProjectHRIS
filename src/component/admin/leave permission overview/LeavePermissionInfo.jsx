import ApprovePaidLeaveAdmin from "./component/info/Approve"
import ApprovePermission from "./component/info/Approve-permission"
import PaidLeave from "./component/info/Paid Leave"
import PendingPaidLeaveAdmin from "./component/info/Pending"
import PendingPermission from "./component/info/Pending-permission"
import Permission from "./component/info/Permission"
import RejectPaidLeaveAdmin from "./component/info/Reject"
import RejectPermission from "./component/info/Reject permission"

const LeavePermissionInfo = () => {
    return (
        <div className="w-full h-full flex flex-col gap-8">
            <div className="flex h-1/2 gap-8">
                <PaidLeave />
                <ApprovePaidLeaveAdmin />
                <PendingPaidLeaveAdmin />
                <RejectPaidLeaveAdmin />
            </div>
            <div className="flex h-1/2 gap-8">
                <Permission />
                <ApprovePermission />
                <PendingPermission />
               <RejectPermission />
            </div>
        </div>
    )
}
export default LeavePermissionInfo;