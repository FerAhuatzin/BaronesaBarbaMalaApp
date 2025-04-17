import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

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

export const GiftIcon = (props) => (
    <AntDesign name="gift" {...props} />
)

export const CloseIcon = (props) => (
    <AntDesign name="close" {...props} />
)

export const EyeIcon = (props) => (
    <Ionicons name="eye" {...props} />
)

export const EyeOffIcon = (props) => (
    <Ionicons name="eye-off" {...props} />
)

