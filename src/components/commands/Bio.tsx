import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiYoutube ,SiInstagram } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/vighnesh2304",
			text: "@vighnesh2304",
		},
		{
			title: "Instagram",
			Icon: SiInstagram ,
			href: "https://www.instagram.com/vighhn.eshhh/",
			text: "@vighhn.eshhh",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/vighnesh-kandalgavkar/",
			text: "@vighnesh-kandalgavkar",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/78204375?s=400&u=b014d5521a6319f2b33bdb6f8a32830c0e567a37&v=4"
					alt="vighnesh"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Vighnesh</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 20 years ago.</p>
				</div>
			</div>
			<p>
			Hi there! I am a software developer passionate about web development and always eager to learn new things related to coding. With a strong foundation in front-end and back-end technologies, I enjoy creating seamless and user-friendly web applications. My current focus is on expanding my skills in modern frameworks and keeping up with the latest industry trends. Let's connect and build something amazing together!
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
