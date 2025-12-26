import { AnimatedIconProps } from "./types";
import AlignCenterIcon from "./align-center-icon";
import ArrowBackIcon from "./arrow-back-icon";
import ArrowBackUpIcon from "./arrow-back-up-icon";
import ArrowNarrowDownDashedIcon from "./arrow-narrow-down-dashed-icon";
import ArrowNarrowDownIcon from "./arrow-narrow-down-icon";
import ArrowNarrowLeftDashedIcon from "./arrow-narrow-left-dashed-icon";
import ArrowNarrowLeftIcon from "./arrow-narrow-left-icon";
import ArrowNarrowRightDashedIcon from "./arrow-narrow-right-dashed-icon";
import ArrowNarrowRightIcon from "./arrow-narrow-right-icon";
import ArrowNarrowUpDashedIcon from "./arrow-narrow-up-dashed-icon";
import ArrowNarrowUpIcon from "./arrow-narrow-up-icon";
import BatteryIcon from "./battery-icon";
import BatteryChargingIcon from "./battery-charging-icon";
import BatteryPauseIcon from "./battery-pause-icon";
import BookIcon from "./book-icon";
import BookmarkIcon from "./bookmark-icon";
import BrightnessDownIcon from "./brightness-down-icon";
import BulbSvg from "./bulb-svg";
import CartIcon from "./cart-icon";
import CheckedIcon from "./checked-icon";
import CreditCard from "./credit-card";
import CopyIcon from "./copy-icon";
import CopyOffIcon from "./copy-off-icon";
import DoubleCheckIcon from "./double-check-icon";
import DownCheveron from "./down-cheveron";
import FilledBellIcon from "./filled-bell-icon";
import FilledCheckedIcon from "./filled-checked-icon";
import GearIcon from "./gear-icon";
import GithubIcon from "./github-icon";
import GithubCopilotIcon from "./github-copilot-icon";
import GitlabIcon from "./gitlab-icon";
import Instagram from "./instagram";
import LikeIcon from "./like-icon";
import LogoutIcon from "./logout-icon";
import MagnifierIcon from "./magnifier-icon";
import MoonIcon from "./moon-icon";
import PenIcon from "./pen-icon";
import PhoneVolume from "./phone-volume";
import PlayerIcon from "./player-icon";
import QRCodeSVG from "./qrcode-svg";
import QuestionMark from "./question-mark";
import RefreshIcon from "./refresh-icon";
import RightCheveron from "./right-cheveron";
import RocketIcon from "./rocket-icon";
import SendIcon from "./send-icon";
import ShieldCheck from "./shield-check";
import ShoppingCartIcon from "./shopping-cart-icon";
import SimpleCheckedIcon from "./simple-checked-icon";
import SkullEmoji from "./skull-emoji";
import TelephoneIcon from "./telephone-icon";
import TextIcon from "./text-icon";
import ToggleIcon from "./toggle-icon";
import TrashIcon from "./trash-icon";
import GlobeIcon from "./globe-icon";
import KeyframesIcon from "./keyframes-icon";
import WifiIcon from "./wifi-icon";
import WifiOffIcon from "./wifi-off-icon";
import WhatsappIcon from "./whatsapp-icon";
import TerminalIcon from "./terminal-icon";
import TwitterXIcon from "./twitter-x-icon";

export interface IconType {
  name: string;
  icon: React.FC<AnimatedIconProps>;
  keywords: string[];
  customProps?: {
    name: string;
    type: string;
    defaultValue: string | boolean | number;
  }[];
}

const ICON_LIST: IconType[] = [
  {
    name: "arrow-back-icon",
    icon: ArrowBackIcon,
    keywords: ["arrow", "back", "return", "undo", "previous"],
  },
  {
    name: "arrow-back-up-icon",
    icon: ArrowBackUpIcon,
    keywords: ["arrow", "back", "up", "undo", "return"],
  },
  {
    name: "arrow-narrow-down-dashed-icon",
    icon: ArrowNarrowDownDashedIcon,
    keywords: ["arrow", "down", "dashed", "download", "scroll"],
  },
  {
    name: "arrow-narrow-down-icon",
    icon: ArrowNarrowDownIcon,
    keywords: ["arrow", "down", "download", "scroll"],
  },
  {
    name: "arrow-narrow-left-dashed-icon",
    icon: ArrowNarrowLeftDashedIcon,
    keywords: ["arrow", "left", "dashed", "back", "previous"],
  },
  {
    name: "arrow-narrow-left-icon",
    icon: ArrowNarrowLeftIcon,
    keywords: ["arrow", "left", "back", "previous"],
  },
  {
    name: "arrow-narrow-right-dashed-icon",
    icon: ArrowNarrowRightDashedIcon,
    keywords: ["arrow", "right", "dashed", "next", "forward"],
  },
  {
    name: "arrow-narrow-right-icon",
    icon: ArrowNarrowRightIcon,
    keywords: ["arrow", "right", "next", "forward"],
  },
  {
    name: "arrow-narrow-up-dashed-icon",
    icon: ArrowNarrowUpDashedIcon,
    keywords: ["arrow", "up", "dashed", "upload", "scroll"],
  },
  {
    name: "arrow-narrow-up-icon",
    icon: ArrowNarrowUpIcon,
    keywords: ["arrow", "up", "upload", "scroll"],
  },
  {
    name: "align-center-icon",
    icon: AlignCenterIcon,
    keywords: ["align", "center", "text", "format", "paragraph"],
  },
  {
    name: "battery-icon",
    icon: BatteryIcon,
    keywords: ["battery", "charging", "bolt"],
  },
  {
    name: "battery-charging-icon",
    icon: BatteryChargingIcon,
    keywords: ["battery", "charging", "power"],
  },
  {
    name: "battery-pause-icon",
    icon: BatteryPauseIcon,
    keywords: ["battery", "pause", "hold", "wait"],
  },
  {
    name: "book-icon",
    icon: BookIcon,
    keywords: ["book", "read", "library", "study"],
  },
  {
    name: "bookmark-icon",
    icon: BookmarkIcon,
    keywords: ["bookmark", "save", "favorite", "mark"],
  },
  {
    name: "brightness-down-icon",
    icon: BrightnessDownIcon,
    keywords: ["brightness", "down", "dim", "light", "sun"],
  },
  {
    name: "bulb-svg",
    icon: BulbSvg,
    keywords: ["bulb", "light", "idea", "creativity"],
  },
  {
    name: "cart-icon",
    icon: CartIcon,
    keywords: ["cart", "shopping", "buy", "store"],
  },
  {
    name: "checked-icon",
    icon: CheckedIcon,
    keywords: ["check", "tick", "success", "done"],
  },
  {
    name: "credit-card",
    icon: CreditCard,
    keywords: ["credit", "card", "payment", "money"],
  },
  {
    name: "copy-icon",
    icon: CopyIcon,
    keywords: ["copy", "clipboard", "duplicate", "paste"],
  },
  {
    name: "copy-off-icon",
    icon: CopyOffIcon,
    keywords: ["copy", "off", "disabled", "no copy"],
  },
  {
    name: "double-check-icon",
    icon: DoubleCheckIcon,
    keywords: ["check", "double", "read", "seen"],
  },
  {
    name: "down-cheveron",
    icon: DownCheveron,
    keywords: ["arrow", "down", "expand", "more"],
  },
  {
    name: "filled-bell-icon",
    icon: FilledBellIcon,
    keywords: ["bell", "notification", "alert", "alarm"],
  },
  {
    name: "filled-checked-icon",
    icon: FilledCheckedIcon,
    keywords: ["check", "tick", "success", "filled", "done"],
  },
  {
    name: "gear-icon",
    icon: GearIcon,
    keywords: ["gear", "settings", "config", "options"],
  },
  {
    name: "github-icon",
    icon: GithubIcon,
    keywords: ["github", "git", "code", "repository", "social"],
  },
  {
    name: "github-copilot-icon",
    icon: GithubCopilotIcon,
    keywords: ["github", "copilot", "ai", "code", "assistant"],
  },
  {
    name: "gitlab-icon",
    icon: GitlabIcon,
    keywords: ["gitlab", "git", "code", "repository", "devops"],
  },
  {
    name: "instagram",
    icon: Instagram,
    keywords: ["instagram", "social", "media", "photo"],
  },
  {
    name: "like-icon",
    icon: LikeIcon,
    keywords: ["like", "heart", "love", "favorite"],
  },
  {
    name: "logout-icon",
    icon: LogoutIcon,
    keywords: ["logout", "exit", "signout", "leave"],
  },
  {
    name: "magnifier-icon",
    icon: MagnifierIcon,
    keywords: ["search", "find", "zoom", "look"],
  },
  {
    name: "moon-icon",
    icon: MoonIcon,
    keywords: ["moon", "night", "dark", "sleep", "theme"],
  },
  {
    name: "pen-icon",
    icon: PenIcon,
    keywords: ["pen", "edit", "write", "modify"],
  },
  {
    name: "phone-volume",
    icon: PhoneVolume,
    keywords: ["phone", "call", "volume", "sound"],
  },
  {
    name: "player-icon",
    icon: PlayerIcon,
    keywords: ["play", "media", "music", "video"],
  },
  {
    name: "qrcode-svg",
    icon: QRCodeSVG,
    keywords: ["qr", "code", "scan", "barcode"],
  },
  {
    name: "question-mark",
    icon: QuestionMark,
    keywords: ["question", "help", "info", "faq"],
  },
  {
    name: "refresh-icon",
    icon: RefreshIcon,
    keywords: ["refresh", "reload", "sync", "update"],
  },
  {
    name: "right-cheveron",
    icon: RightCheveron,
    keywords: ["arrow", "right", "next", "forward"],
  },
  {
    name: "rocket-icon",
    icon: RocketIcon,
    keywords: ["rocket", "launch", "space", "startup"],
  },
  {
    name: "send-icon",
    icon: SendIcon,
    keywords: ["send", "message", "mail", "submit"],
  },
  {
    name: "shield-check",
    icon: ShieldCheck,
    keywords: ["shield", "security", "safe", "protect"],
  },
  {
    name: "shopping-cart-icon",
    icon: ShoppingCartIcon,
    keywords: ["cart", "shopping", "store", "buy"],
  },
  {
    name: "simple-checked-icon",
    icon: SimpleCheckedIcon,
    keywords: ["check", "tick", "simple", "done"],
  },
  {
    name: "skull-emoji",
    icon: SkullEmoji,
    keywords: ["skull", "death", "danger", "warning"],
  },
  {
    name: "telephone-icon",
    icon: TelephoneIcon,
    keywords: ["telephone", "call", "phone", "contact"],
  },
  {
    name: "text-icon",
    icon: TextIcon,
    keywords: ["text", "type", "font", "write"],
  },
  {
    name: "toggle-icon",
    icon: ToggleIcon,
    keywords: ["toggle", "switch", "on", "off"],
  },
  {
    name: "trash-icon",
    icon: TrashIcon,
    keywords: ["trash", "delete", "remove", "bin"],
    customProps: [
      { name: "shakeOnClick", type: "boolean", defaultValue: false },
      { name: "dangerHover", type: "boolean", defaultValue: false },
      { name: "keepOpenOnDelete", type: "boolean", defaultValue: false },
    ],
  },
  {
    name: "globe-icon",
    icon: GlobeIcon,
    keywords: ["globe", "world", "earth", "planet"],
  },
  {
    name: "whatsapp-icon",
    icon: WhatsappIcon,
    keywords: ["whatsapp", "chat", "message", "social"],
  },
  {
    name: "keyframes-icon",
    icon: KeyframesIcon,
    keywords: ["keyframes", "animation", "motion", "video", "timeline"],
  },
  {
    name: "wifi-icon",
    icon: WifiIcon,
    keywords: ["wifi", "wireless", "internet", "network", "signal"],
  },
  {
    name: "wifi-off-icon",
    icon: WifiOffIcon,
    keywords: ["wifi", "off", "disconnected", "no signal", "network"],
  },
  {
    name: "terminal-icon",
    icon: TerminalIcon,
    keywords: ["terminal", "console", "command", "shell", "code"],
  },
  {
    name: "twitter-x-icon",
    icon: TwitterXIcon,
    keywords: ["twitter", "x", "social", "media", "post"],
  },
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
