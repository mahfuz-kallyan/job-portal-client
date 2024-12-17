import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import image1 from '../../assets/images/businesspeople-having-informal-meeting.jpg'
import image2 from '../../assets/images/young-men-women-sitting-office-working-laptops-emotions-concept.jpg'

const Banner = () => {
	return (
		<div>
			<div className="hero bg-base-200 min-h-96">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex-1">
						<motion.img
                            src={image1}
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 10, repeat: Infinity }}
							className="max-w-sm w-64 rounded-t-[36px] rounded-br-[36px] border-l-8 border-b-8 border-blue-600 shadow-2xl"
						/>
						<motion.img
                            src={image2}
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 10, repeat: Infinity }}
							className="max-w-sm w-64 rounded-t-[36px] rounded-br-[36px] border-l-8 border-b-8 border-blue-600 shadow-2xl"
						/>
					</div>
					<div className="flex-1">
						<motion.h1
							animate={{ x: 50, color: ["blue"] }}
							transition={{
								duration: 2,
								delay: 1,
								ease: easeOut,
								repeat: Infinity,
							}}
							className="text-5xl font-bold"
						>
							Latest{" "}
							<motion.span
								animate={{
									color: ["#ecff33", "#33ffe3", "#ff6133"],
								}}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								jobs
							</motion.span>{" "}
							for you!
						</motion.h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
