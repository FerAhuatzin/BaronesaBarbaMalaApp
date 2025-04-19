import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
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

export const MapPinIcon = (props) => (
    <Feather name="map-pin" {...props} />
)

export const ChevronUpIcon = (props) => (
    <Ionicons name="chevron-up" {...props} />
)

export const ChevronDownIcon = (props) => (
    <Ionicons name="chevron-down" {...props} />
)
