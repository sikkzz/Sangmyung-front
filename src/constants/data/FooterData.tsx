import Icons from "../icon";

const size = 24;
const iconColor = "#fff";

export const FooterSiteData = [
	{
		site_item: "상명대학교",
		link: "https://www.smu.ac.kr/ko/index.do",
	},
	{
		site_item: "상명대학교 이캠퍼스",
		link: "https://ecampus.smu.ac.kr/login.php",
	},
	{
		site_item: "상명대학교 샘물",
		link: "https://portal.smu.ac.kr",
	},
	{
		site_item: "상명대학교 수강신청",
		link: "https://smsso.smu.ac.kr/svc/tk/Auth.do?ac=Y&RelayState=https%3A%2F%2Fsmsso.smu.ac.kr%2Fagree%2Fmain.jsp&ifa=N&id=sugang&",
	},
	{
		site_item: "Office 365",
		link: "https://cloud.smu.ac.kr/t/smu.ac.kr",
	},
	{
		site_item: "인터넷 증명 발급 센터",
		link: "https://smu.certpia.com/",
	},
];

export const FooterSocialIconData = [
	{
		icon: <Icons.BsInstagram size={size} color={iconColor} />,
		link: "https://www.instagram.com/smu_1st",
	},
	{
		icon: <Icons.FaYoutube size={size} color={iconColor} />,
		link: "https://www.youtube.com/channel/UCKfo9NabKyviW5jDi3xBngg",
	},
	{
		icon: <Icons.AiOutlineMail size={size} color={iconColor} />,
		link: "mailto:smu.first2023@gmail.com",
	},
	{
		icon: <Icons.RiKakaoTalkFill size={size} color={iconColor} />,
		link: "https://open.kakao.com/o/sXKtjVbf",
	},
];
