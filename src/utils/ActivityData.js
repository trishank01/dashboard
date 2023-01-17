import Dollar from "../assests/Dollar.png"
import Failed from "../assests/failed.png"
import Pending from "../assests/Pending.png"

export const ActivityData = [
    { 
        id: 1,
        Activity : "Payment Recieved",
        icon : Dollar,
        amount : 2000,
        status : "Failed",
        date : "May 5, 2022"
    },
    { 
        id: 2,
        Activity : "Shift request approved",
        icon : Dollar,
        amount : 1000,
        status : "Success",
        date : "May 5, 2022"
    },
    { 
        id: 3,
        Activity : "No show without notification",
        icon : Failed,
        status : "Failed",
        date : "May 5, 2022"
    },
    { 
        id: 4,
        Activity : "Shift cancellation approved",
        icon : Pending,
        amount : 2000,
        status : "Processing",
        date : "May 5, 2022"
    },
    { 
        id: 5,
        Activity : "Payment Recieved",
        icon : Dollar,
        amount : 500,
        status : "Success",
        date : "May 5, 2022"
    },
    { 
        id: 6,
        Activity : "Payment Recieved",
        icon : Dollar,
        amount : 400,
        status : "Success",
        date : "May 5, 2022"
    },
    { 
        id: 7,
        Activity : "Payment Failed",
        icon : Failed,
        status : "Failed",
        date : "May 5, 2022"
    },
    { 
        id: 8,
        Activity : "Payment Pending",
        icon : Pending,
        status : "Processing",
        date : "May 5, 2022"
    },
    { 
        id: 9,
        Activity : "Payment Pending",
        icon : Pending,
        status : "Processing",
        date : "May 5, 2022"
    },
]