import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

export const CalendarIcon = (props) => (
    <Ionicons name="calendar-clear-outline" {...props}/>
)
  
export const AppointmentIcon = (props) => (
    <SimpleLineIcons name="clock" {...props} />
)

export const ShopIcon = (props) => (
    <Ionicons name="cart-outline" {...props} />
)

export const ProfileIcon = (props) => (
    <Ionicons name="person-circle-outline" {...props} />
)