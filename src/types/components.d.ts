import { AxiosError, AxiosResponse } from "axios";

declare global {
	/* Type of AuthTokenForm */
	namespace AuthTokenFormComponent {
		interface InputLabel {
			required?: boolean;
		}

		interface Input {
			textTransform?: string;
		}

		interface TabBtn {
			active?: boolean;
		}
	}
	/* Type of Error */
	namespace ErrorComponent {
		interface Props {
			error: AxiosError<AxiosData> | Error;
			onClick?: Function;
		}

		interface AxiosData {
			code: string;
			message: string;
			result: boolean;
		}
	}
}
