import type { ReactNode } from "react";

interface Prop {
	children: ReactNode;
}

const H1 = ({ children }: Prop) => {
	return <h1 className="text-3xl text-amber-300">{children}</h1>;
};

export default H1;
